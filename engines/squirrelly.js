const Sqrl = require('squirrelly');
const fs   = require('fs');

const cfg = Sqrl.getConfig({});
const cache = new Map();

module.exports = {
  name: 'squirrelly',
  ext:  'sqrl',
  render: function(templatePath, data) {
    let fn = cache.get(templatePath);
    if (!fn) {
      fn = Sqrl.compile(fs.readFileSync(templatePath, 'utf8'), cfg);
      cache.set(templatePath, fn);
    }
    return fn(data, cfg);
  }
};
