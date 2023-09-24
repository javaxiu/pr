const ghPages = require('gh-pages');
const childProcess = require('child_process');

childProcess.exec('npm run build', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  ghPages.publish('./docs/.vuepress/dist', { branch: 'gh-page' }, (err) => {
    console.log(err);
  })
});