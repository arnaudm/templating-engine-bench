const igodust = require('igo-dust');

igodust.configure({ cache: true, views: '.' });

module.exports = {
  name: 'igodust-sync',
  ext: 'dust',
  render: function(template, data) {
    return igodust.renderFile(template, data);
  }
};
