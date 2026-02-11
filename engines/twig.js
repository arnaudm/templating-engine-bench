const Twig = require('twig');

module.exports = {
  name: 'twig',
  ext: 'twig',
  render: function(templatePath, data) {
    // Twig caches templates by id. We need to load it once without async
    try {
      const template = Twig.twig({
        id: templatePath,
        path: templatePath,
        async: false,
        rethrow: true
      });
      return template.render(data);
    } catch (e) {
      // If template is already cached, just render it
      if (e.message && e.message.includes('already a template')) {
        const template = Twig.twig({ ref: templatePath });
        return template.render(data);
      }
      throw e;
    }
  }
};
