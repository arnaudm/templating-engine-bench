const Twig = require('twig');
const fs = require('fs');

const CACHE = {};

module.exports = {
  name: 'twig',
  ext: 'twig',
  render: function(templatePath, data) {
    if (!CACHE[templatePath]) {
      CACHE[templatePath] = Twig.twig({ data: fs.readFileSync(templatePath, 'utf-8') });
    }
    return CACHE[templatePath].render(data);
  }
};
