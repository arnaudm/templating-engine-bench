const { Liquid } = require('liquidjs');

const engine = new Liquid();
const CACHE  = {};

module.exports = {
  name: 'liquidjs',
  ext:  'liquid',
  render: function(templatePath, data) {
    let template = CACHE[templatePath];
    if (!template) {
      template = engine.parseFileSync(templatePath);
      CACHE[templatePath] = template;
    }
    return engine.renderSync(template, data);
  }
};