const fs   = require('fs');
const path = require('path');

const ITERATIONS = 5000;
const WARMUP     = 50;

function benchSync(engine, templatePath, data) {
  for (let i = 0; i < WARMUP; i++) engine.render(templatePath, data);
  const start = Date.now();
  for (let i = 0; i < ITERATIONS; i++) engine.render(templatePath, data);
  return Date.now() - start;
}

async function benchAsync(engine, templatePath, data) {
  for (let i = 0; i < WARMUP; i++) await engine.render(templatePath, data);
  const start = Date.now();
  for (let i = 0; i < ITERATIONS; i++) await engine.render(templatePath, data);
  return Date.now() - start;
}

async function runBenchmarks() {
  const templateDirs = fs.readdirSync('./templates');
  const engineFiles  = fs.readdirSync('./engines');

  let markdown = '## RENDER \n';

  for (const dir of templateDirs) {
    const dataPathJs   = path.join('./templates', dir, 'data.js');
    const dataPathJson = path.join('./templates', dir, 'data.json');
    let data = {};

    if (fs.existsSync(dataPathJs)) {
      data = require(path.resolve(dataPathJs));
    } else if (fs.existsSync(dataPathJson)) {
      data = require(path.resolve(dataPathJson));
    }

    markdown += `\n### ${dir} (run ${ITERATIONS} times) \n`;
    const benchmarks = [];

    for (const file of engineFiles) {
      const engineName   = path.basename(file, '.js');
      const engine       = require('./engines/' + file);
      const templatePath = path.join('./templates', dir, 'template.' + engine.ext);

      if (!fs.existsSync(templatePath)) continue;

      console.log(`${engineName} working on ${dir}...`);
      const ms = engine.async
        ? await benchAsync(engine, templatePath, data)
        : benchSync(engine, templatePath, data);
      console.log(`${engineName} done\n`);
      benchmarks.push({ engineName, ms });
    }

    benchmarks.sort((a, b) => a.ms - b.ms);

    for (const { engineName, ms } of benchmarks) {
      markdown += `\`${engineName}\` => **${ms}ms** <br/> \n`;
    }
  }

  return markdown;
}

function updateReadme(markdown) {
  const content = fs.readFileSync('readme.md', 'utf8');
  const [before, , after] = content.split(/(<!-- <render performance> -->[\s\S]*<!-- <end> -->)/);
  const between = '<!-- <render performance> -->\n' + markdown + '\n<!-- <end> -->';
  fs.writeFileSync('readme.md', before + between + after);
}

runBenchmarks().then(updateReadme);
