const nunjucks = require('nunjucks');

const env = nunjucks.configure('./', {
  autoescape: true,
  noCache: false  // noCache: false means caching is enabled
});

module.exports = {
  name: 'nunjucks',
  ext: 'njk',
  render: function(templatePath, data) {
    return env.render(templatePath, data);
  }
};
