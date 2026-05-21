const { Eta } = require('eta');

const eta = new Eta({ views: './', cache: true });

module.exports = {
  name: 'eta',
  ext:  'eta',
  render: function(templatePath, data) {
    return eta.render(templatePath, data);
  }
};