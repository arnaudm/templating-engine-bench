const hogan = require('hogan.js');
const fs = require('fs');

const CACHE = {};

module.exports = {
  name: 'hogan',
  ext: 'hogan',
  render: function(templatePath, data) {
    let template = CACHE[templatePath];
    if (!template) {
      const templateString = fs.readFileSync(templatePath, 'utf-8');
      template = hogan.compile(templateString);
      CACHE[templatePath] = template;
    }
    return template.render(data);
  }
};
