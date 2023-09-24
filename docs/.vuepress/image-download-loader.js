const request = require('request');
const fs = require('fs-extra');
const path = require('path');

const root = path.join(process.cwd(), './docs/.vuepress/public');

const downloading = new Set();

const download = (url) => {
  const filepath = new URL(url).pathname;
  const folder = path.dirname(filepath);
  const absPath = path.join(root, filepath);
  if (fs.existsSync(absPath)) return filepath;
  if (downloading.has(url)) return;
  downloading.add(url);
  fs.ensureDir(path.join(root, folder)).then(() => {
    console.log(`download ${absPath}`);
    request({
      url,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36'
      }
    }).pipe(fs.createWriteStream(absPath))
  });
  return filepath;
}

module.exports = function (markdown){
  const regex = /!\[.*?\]\((.*?)\)/g;
  return markdown.replace(regex, (tag, url) => {
    const pathname = download(url)
    return tag.replace(url, pathname);
  });
}

// const txt = fs.readFileSync('/Users/jiawen/workspace/my-blogs/docs/低代码系列/编排 - 变量参数.md', { encoding: 'utf-8' });
// module.exports(txt)