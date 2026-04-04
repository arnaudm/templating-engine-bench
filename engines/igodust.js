const igodust = require('@igojs/dust');

igodust.configure({ cache: true, views: '.' });

module.exports = {
  name: 'igodust',
  ext: 'dust',
  async: true,
  render: async function(template, data) {
    return await igodust.renderFile(template, data);
  }
};
