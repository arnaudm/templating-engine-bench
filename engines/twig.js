const Twig = require('twig');

module.exports = {
  name: 'twig',
  ext: 'twig',
  render: function(templatePath, data) {
    // Twig.twig caches templates by default when using renderFile
    const template = Twig.twig({
      id: templatePath,
      path: templatePath,
      async: false
    });
    return template.render(data);
  }
};
