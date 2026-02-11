const Mustache = require('mustache');
const fs = require('fs');

const CACHE = {};

module.exports = {
  name: 'mustache',
  ext: 'mustache',
  render: function(templatePath, data) {
    let template = CACHE[templatePath];
    if (!template) {
      template = fs.readFileSync(templatePath, 'utf-8');
      CACHE[templatePath] = template;
      // Parse the template to cache it
      Mustache.parse(template);
    }
    return Mustache.render(template, data);
  }
};
