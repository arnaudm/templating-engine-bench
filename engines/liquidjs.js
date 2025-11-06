const { Liquid } = require('liquidjs');
const engine = new Liquid({
  cache: true  // Enable caching to avoid opening files multiple times
});

module.exports = {
  name: 'liquidjs',
  ext: 'liquid',
  render: function(template, data) {
    return engine.renderFileSync(template, data);
  }
}