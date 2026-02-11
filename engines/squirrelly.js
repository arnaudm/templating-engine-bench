const Sqrl = require('squirrelly');
const fs = require('fs');

const CACHE = {};

module.exports = {
  name: 'squirrelly',
  ext: 'sqrl',
  render: function(templatePath, data) {
    let template = CACHE[templatePath];
    if (!template) {
      template = fs.readFileSync(templatePath, 'utf-8');
      CACHE[templatePath] = template;
    }
    return Sqrl.render(template, data);
  }
};
