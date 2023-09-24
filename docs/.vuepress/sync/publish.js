const ghPages = require('gh-pages');

ghPages.publish('./docs/.vuepress/dist', { branch: 'gh-page' }, (err) => {
  console.log(err);
})