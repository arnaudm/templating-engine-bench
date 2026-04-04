const Hogan = require('hogan.js');
const fs = require('fs');

const CACHE = {};

module.exports = {
  name: 'hogan',
  ext: 'hogan',
  render: function(templatePath, data) {
    if (!CACHE[templatePath]) {
      CACHE[templatePath] = Hogan.compile(fs.readFileSync(templatePath, 'utf-8'));
    }
    return CACHE[templatePath].render(data);
  }
};
