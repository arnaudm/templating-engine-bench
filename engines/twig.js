const Twig = require('twig');

module.exports = {
  name: 'twig',
  ext: 'twig',
  render: function(templatePath, data) {
    // Twig caches templates by id. On first render, we load the template.
    // On subsequent renders, the template is already cached and trying to
    // load it again throws an error. We catch that and use the cached version.
    try {
      const template = Twig.twig({
        id: templatePath,
        path: templatePath,
        async: false,
        rethrow: true
      });
      return template.render(data);
    } catch (e) {
      // Template already cached - use ref to retrieve it
      if (e.message && e.message.includes('already a template')) {
        const template = Twig.twig({ ref: templatePath });
        return template.render(data);
      }
      throw e;
    }
  }
};
