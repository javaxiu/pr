const { path_map } = require('./sync/config.json');

const keyToName = Object.keys(path_map).reduce((pre, k) => ({
  ...pre,
  [path_map[k]]: k,
}), {});

const scanSidebar = () => {
  const fg = require('fast-glob');
  const sidebar: Array<any> = [];
  for(let path of fg.globSync('./docs/**')) {
    const fileKeys = path.match('./docs/(.+).md')[1].split('/');
    const fileName = fileKeys.pop();
    let children = sidebar;
    for (let i = 0; i < fileKeys.length; i++) {
      const j = children.findIndex(child => child.id === fileKeys[i]);
      if (j === -1) {
        const node = {
          id: fileKeys[i],
          title: keyToName[fileKeys[i]] || fileKeys[i],
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
  return sidebar[0].children;
}