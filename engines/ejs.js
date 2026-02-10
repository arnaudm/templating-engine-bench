const ejs = require('ejs');
const fs = require('fs');

const CACHE = {};

module.exports = {
  name: 'ejs',
  ext: 'ejs',
  render: function(templatePath, data) {
    let template = CACHE[templatePath];
    if (!template) {
      template = ejs.compile(fs.readFileSync(templatePath, 'utf-8'));
      CACHE[templatePath] = template;
    }
    return template(data);
  }
};