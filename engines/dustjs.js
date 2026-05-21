const dust = require('dustjs-linkedin');
require('dustjs-helpers');  // adds @eq, @lt, @gt, etc.
const fs   = require('fs');

dust.config.cache = true;

const CACHE = {};

module.exports = {
  name: 'dustjs',
  ext:  'dustjs',
  render: function(templatePath, data) {
    if (!CACHE[templatePath]) {
      const source   = fs.readFileSync(templatePath, 'utf-8');
      const compiled = dust.compile(source, templatePath);
      dust.loadSource(compiled);
      CACHE[templatePath] = true;
    }
    let result;
    dust.render(templatePath, data, function(err, out) {
      if (err) {
        throw err;
      }
      result = out;
    });
    return result;
  }
};
