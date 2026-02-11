const fs = require('fs');

const templateDirs = fs.readdirSync('./templates');
const engineDirs = fs.readdirSync('./engines');

// Helper function to extract engine name from filename
const getEngineName = (filename) => filename.replace(/\.[^.]+$/, '');

const bench = (engine, template, data, n) => {
  const start = Date.now();
  for (let i = 0; i < n; i++) {
    engine.render(template, data);
  }
  const end = Date.now();
  return end - start;
};

let results = '## RENDER \n';

for (let dir of templateDirs) { 

  const dataPathJs   = './templates/' + dir + '/data.js';
  const dataPathJson = './templates/' + dir + '/data.json';
  let data;

  

  if (fs.existsSync(dataPathJs)) {
    data = require(dataPathJs);
  } else if (fs.existsSync(dataPathJson)) {
    data = require(dataPathJson)
  } else {
    data = {};
  }
  
  const n  = 5000;
  results += `\n### ${dir} (run ${n} times) \n`;

  let benchmarks = [];

  for (let engine of engineDirs ) {
    const engineName = getEngineName(engine);
    const enginePath = require('./engines/' + engine);

    const templatePath = './templates/' + dir + '/template.' + enginePath.ext;
    if (!fs.existsSync(templatePath)) {
      continue;
    }
    
    try {
      console.log(`${engineName} working on ${dir}...`);
      const benchmark = bench(enginePath, templatePath, data, n);
      console.log(`${engineName} has finished to work !\n`);
      benchmarks.push({ engineName, benchmark});
    } catch (error) {
      console.error(`Error with ${engineName} on ${dir}: ${error.message}\n`);
    }
  };

  benchmarks.sort((a, b) => a.benchmark - b.benchmark);

  for (let { engineName, benchmark } of benchmarks) {
    results += `\`${engineName}\` => **${benchmark}ms** <br/> \n`;
  }
  
};


let readmeContent = fs.readFileSync('readme.md', 'utf8');
let [before, between, after] = readmeContent.split(/(<!-- <render performance> -->[\s\S]*<!-- <end> -->)/);
between = '<!-- <render performance> -->\n' + results + '\n<!-- <end> -->';
readmeContent = before + between + after;
fs.writeFileSync('readme.md', readmeContent);