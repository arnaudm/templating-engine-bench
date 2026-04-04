const Mustache = require('mustache');
const fs = require('fs');

const CACHE = {};

module.exports = {
  name: 'mustache',
  ext: 'mustache',
  render: function(templatePath, data) {
    if (!CACHE[templatePath]) {
      CACHE[templatePath] = fs.readFileSync(templatePath, 'utf-8');
      Mustache.parse(CACHE[templatePath]);
    }
    return Mustache.render(CACHE[templatePath], data);
  }
};
