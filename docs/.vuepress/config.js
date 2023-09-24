const scanSidebar = () => {
  const fg = require('fast-glob');
  const sidebar = [];
  for(let path of fg.globSync('./docs/**')) {
    const fileKeys = path.match('./docs/(.+).md')[1].split('/');
    const fileName = fileKeys.pop();
    let children = sidebar;
    for (let i = 0; i < fileKeys.length; i++) {
      const j = children.findIndex(child => child.title === fileKeys[i]);
      if (j === -1) {
        const node = {
          title: fileKeys[i],
          collapsable: true,
          children: []
        }
        children.push(node);
        children = node.children;
      } else {
        children = children[j].children;
      }
    }
    fileName !== 'README' && children && children.push({
      title: fileName,
      path: [...fileKeys, fileName].join('/')
    })
  }
  require('fs').writeFile('./docs/.vuepress/sidebar.json', JSON.stringify(sidebar, null, 2), () => void 0);
  return sidebar;
}

module.exports = {
  title: 'xiujava',
  description: 'jiawen 的博客',
  // theme: 'reco',
  themeConfig: {
    search: false,
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'yuque', link: 'https://www.yuque.com/xiwen-bxuha/pr/' },
      { text: 'github', link: 'https://github.com/javaxiu' },
    ],
    sidebar: scanSidebar(),
  },
  chainWebpack (config, isServer) {
    // config 是一个 ChainableConfig 的实例
    config.module.rule('markdown').before('markdown-loader').use('image-download')
      .loader(require.resolve('./image-download-loader'));
  }
}
