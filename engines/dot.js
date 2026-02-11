const doT = require('dot');
const fs = require('fs');

// Configure doT settings
doT.templateSettings = {
  evaluate:    /\{\{([\s\S]+?)\}\}/g,
  interpolate: /\{\{=([\s\S]+?)\}\}/g,
  encode:      /\{\{!([\s\S]+?)\}\}/g,
  use:         /\{\{#([\s\S]+?)\}\}/g,
  define:      /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
  conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
  iterate:     /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
  varname: 'it',
  strip: false,
  append: true,
  selfcontained: false
};

const CACHE = {};

module.exports = {
  name: 'dot',
  ext: 'dot',
  render: function(templatePath, data) {
    let templateFn = CACHE[templatePath];
    if (!templateFn) {
      const templateString = fs.readFileSync(templatePath, 'utf-8');
      templateFn = doT.template(templateString);
      CACHE[templatePath] = templateFn;
    }
    return templateFn(data);
  }
};
