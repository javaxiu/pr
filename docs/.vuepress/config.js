const sidebar = require('./sidebar.json');
const { base } = require('./sync/config.json');

module.exports = {
  title: 'xiujava',
  description: 'jiawen 的博客',
  base,
  // theme: 'reco',
  themeConfig: {
    search: false,
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'yuque', link: 'https://www.yuque.com/xiwen-bxuha/pr/' },
      { text: 'github', link: 'https://github.com/javaxiu' },
    ],
    sidebar,
  },
  chainWebpack (config, isServer) {
    // config 是一个 ChainableConfig 的实例
    config.module.rule('markdown').before('markdown-loader').use('image-download')
      .loader(require.resolve('./image-download-loader'));
  }
}
