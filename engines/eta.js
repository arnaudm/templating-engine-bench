const { Eta }  = require('eta');

const eta = new Eta({ views: './', cache: true });

module.exports = {
  name: 'eta',
  ext: 'eta',
  render: function(templatePath, data) {
    // Eta.render() accepts a path relative to the views directory
    return eta.render(templatePath, data);
  }
};