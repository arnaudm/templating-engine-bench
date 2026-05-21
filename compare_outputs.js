// Render each template with each engine and compare output sizes + content.
const fs = require('fs');
const path = require('path');

const engineNames = fs.readdirSync('./engines').map(f => path.basename(f, '.js'));
const engines = {};
for (const name of engineNames) {
  engines[name] = require('./engines/' + name + '.js');
}

const groups = fs.readdirSync('./templates');

(async () => {
  for (const group of groups) {
    const dataPathJs   = path.resolve('./templates/' + group + '/data.js');
    const dataPathJson = path.resolve('./templates/' + group + '/data.json');
    let data;
    if (fs.existsSync(dataPathJs))      data = require(dataPathJs);
    else if (fs.existsSync(dataPathJson)) data = require(dataPathJson);
    else data = {};

    console.log('\n=== ' + group + ' ===');
    const results = [];
    for (const [name, engine] of Object.entries(engines)) {
      const tpl = './templates/' + group + '/template.' + engine.ext;
      if (!fs.existsSync(tpl)) continue;
      try {
        let out = engine.async ? await engine.render(tpl, data) : engine.render(tpl, data);
        // normalize whitespace for comparison
        const norm = out.replace(/\s+/g, ' ').trim();
        results.push({ name, raw: out.length, norm: norm.length, sample: norm.slice(0, 80) });
      } catch (e) {
        results.push({ name, error: e.message });
      }
    }
    // sort by normalized length
    results.sort((a, b) => (a.norm || 0) - (b.norm || 0));
    for (const r of results) {
      if (r.error) console.log(`  ${r.name.padEnd(14)} ERROR: ${r.error}`);
      else console.log(`  ${r.name.padEnd(14)} raw=${String(r.raw).padStart(7)}  norm=${String(r.norm).padStart(7)}  ${JSON.stringify(r.sample)}`);
    }
  }
})();
