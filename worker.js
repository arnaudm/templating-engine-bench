// Bench worker: runs in an isolated child process to avoid V8 / GC / CPU-cache
// pollution from other engines. Receives (engineName, group) on argv,
// prints `{ ms }` JSON on stdout.

const fs   = require('fs');
const path = require('path');

const [engineName, group] = process.argv.slice(2);

const ITERATIONS = parseInt(process.env.BENCH_ITERATIONS || '10000', 10);
const WARMUP     = parseInt(process.env.BENCH_WARMUP     || '50', 10);

const engine = require('./engines/' + engineName + '.js');

const dataPathJs   = path.join('./templates', group, 'data.js');
const dataPathJson = path.join('./templates', group, 'data.json');
let data = {};
if (fs.existsSync(dataPathJs)) {
  data = require(path.resolve(dataPathJs));
} else if (fs.existsSync(dataPathJson)) {
  data = require(path.resolve(dataPathJson));
}

const templatePath = path.join('./templates', group, 'template.' + engine.ext);

(async () => {
  if (engine.async) {
    for (let i = 0; i < WARMUP;     i++) await engine.render(templatePath, data);
    const t = Date.now();
    for (let i = 0; i < ITERATIONS; i++) await engine.render(templatePath, data);
    process.stdout.write(JSON.stringify({ ms: Date.now() - t }));
  } else {
    for (let i = 0; i < WARMUP;     i++) engine.render(templatePath, data);
    const t = Date.now();
    for (let i = 0; i < ITERATIONS; i++) engine.render(templatePath, data);
    process.stdout.write(JSON.stringify({ ms: Date.now() - t }));
  }
})();
