const nunjucks = require('nunjucks');
const fs = require('fs');

const CACHE = {};

module.exports = {
  name: 'nunjucks',
  ext: 'njk',
  render: function(templatePath, data) {
    if (!CACHE[templatePath]) {
      CACHE[templatePath] = nunjucks.compile(fs.readFileSync(templatePath, 'utf-8'));
    }
    return CACHE[templatePath].render(data);
  }
};
