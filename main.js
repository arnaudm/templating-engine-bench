// Orchestrator: spawns one fresh Node process per (engine, template) combo
// so each measurement sees a clean V8 / GC / CPU-cache state.

const fs      = require('fs');
const path    = require('path');
const { spawn } = require('child_process');

const ITERATIONS = parseInt(process.env.BENCH_ITERATIONS || '10000', 10);
const WARMUP     = parseInt(process.env.BENCH_WARMUP     || '50', 10);

const ENGINE_URLS = {
  dustjs:     'https://github.com/linkedin/dustjs',
  ejs:        'https://ejs.co/',
  eta:        'https://eta.js.org/',
  handlebars: 'https://handlebarsjs.com/',
  hogan:      'https://twitter.github.io/hogan.js/',
  igodust:    'https://igocreate.github.io/igo/dust/getting-started',
  mustache:   'https://github.com/janl/mustache.js',
  nunjucks:   'https://mozilla.github.io/nunjucks/',
  pug:        'https://pugjs.org/',
  squirrelly: 'https://squirrelly.js.org/',
  twig:       'https://github.com/twigjs/twig.js',
};

function runWorker(engineName, group) {
  return new Promise((resolve, reject) => {
    const env = { ...process.env, BENCH_ITERATIONS: String(ITERATIONS), BENCH_WARMUP: String(WARMUP) };
    const child = spawn(process.execPath, ['worker.js', engineName, group], { stdio: ['ignore', 'pipe', 'inherit'], env });
    let out = '';
    child.stdout.on('data', d => out += d);
    child.on('close', code => {
      if (code !== 0) {
        reject(new Error(`worker ${engineName}/${group} failed (code ${code})`));
        return;
      }
      try {
        resolve(JSON.parse(out));
      } catch (e) {
        reject(new Error(`worker ${engineName}/${group} bad output: ${out}`));
      }
    });
    child.on('error', reject);
  });
}

async function main() {
  const templateDirs = fs.readdirSync('./templates');
  const engineFiles  = fs.readdirSync('./engines');

  // Plan all combos up-front (skip pairs where the template doesn't exist for the engine)
  const tasks = [];
  for (const dir of templateDirs) {
    for (const file of engineFiles) {
      const engineName = path.basename(file, '.js');
      const engine     = require('./engines/' + file);
      const tpl        = path.join('./templates', dir, 'template.' + engine.ext);
      if (!fs.existsSync(tpl)) continue;
      tasks.push({ engineName, group: dir });
    }
  }

  console.log(`Running ${tasks.length} (engine, template) combos in isolated subprocesses (${ITERATIONS} iter, ${WARMUP} warmup)`);
  console.log();

  const results = {};
  for (const dir of templateDirs) results[dir] = [];

  for (const { engineName, group } of tasks) {
    process.stdout.write(`  ${engineName.padEnd(14)} ${group.padEnd(20)} `);
    const { ms } = await runWorker(engineName, group);
    console.log(`${ms}ms`);
    results[group].push({ engineName, ms });
  }

  // Overall score: geometric mean of (fastest engine / this engine) across all
  // templates, on a 0..100 scale (100 = best on every template).
  const allEngines = new Set();
  for (const dir of templateDirs) {
    for (const r of results[dir] || []) allEngines.add(r.engineName);
  }
  const scores = [];
  for (const engine of allEngines) {
    let logSum = 0, count = 0;
    for (const dir of templateDirs) {
      const rs = results[dir] || [];
      const mine = rs.find(r => r.engineName === engine);
      if (!mine) continue;
      const best = Math.min(...rs.map(r => r.ms));
      logSum += Math.log((best || 1) / (mine.ms || 1));
      count++;
    }
    const score = count === 0 ? 0 : Math.round(Math.exp(logSum / count) * 100);
    scores.push({ engineName: engine, score });
  }
  scores.sort((a, b) => b.score - a.score);

  // Build markdown — horizontal ASCII bars, log scale (per-template min→max)
  // so engines that span an order of magnitude stay visually comparable.
  const BAR_WIDTH = 44;
  let markdown = '## OVERALL SCORE\n\n';
  markdown += 'Engines tested: ' + scores
    .map(s => ENGINE_URLS[s.engineName]
      ? `[\`${s.engineName}\`](${ENGINE_URLS[s.engineName]})`
      : `\`${s.engineName}\``)
    .join(', ') + '\n\n';
  markdown += '_geometric mean of (fastest / this engine) across all templates, on a 0–100 scale_\n\n';
  markdown += '```\n';
  const scoreNameW = Math.max(...scores.map(s => s.engineName.length));
  for (const { engineName, score } of scores) {
    const bar = '█'.repeat(Math.round((score / 100) * BAR_WIDTH)) + ' '.repeat(BAR_WIDTH - Math.round((score / 100) * BAR_WIDTH));
    markdown += `${engineName.padEnd(scoreNameW)}  ${bar}  ${String(score).padStart(3)}/100\n`;
  }
  markdown += '```\n\n';
  markdown += '## RENDER \n';
  for (const dir of templateDirs) {
    if (!results[dir].length) continue;
    results[dir].sort((a, b) => a.ms - b.ms);
    const min   = results[dir][0].ms;
    const max   = results[dir][results[dir].length - 1].ms;
    const lMin  = Math.log(min + 1);
    const lMax  = Math.log(max + 1);
    const range = lMax - lMin || 1;
    const nameW = Math.max(...results[dir].map(r => r.engineName.length));
    const msW   = String(max).length;

    markdown += `\n### ${dir} (run ${ITERATIONS} times)\n\n`;
    markdown += '```\n';
    for (const { engineName, ms } of results[dir]) {
      const w   = Math.max(1, Math.round(((Math.log(ms + 1) - lMin) / range) * BAR_WIDTH));
      const bar = '█'.repeat(w) + ' '.repeat(BAR_WIDTH - w);
      markdown += `${engineName.padEnd(nameW)}  ${bar}  ${String(ms).padStart(msW)}ms\n`;
    }
    markdown += '```\n';
  }

  const content = fs.readFileSync('readme.md', 'utf8');
  const [before, , after] = content.split(/(<!-- <render performance> -->[\s\S]*<!-- <end> -->)/);
  const between = '<!-- <render performance> -->\n' + markdown + '\n<!-- <end> -->';
  fs.writeFileSync('readme.md', before + between + after);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
