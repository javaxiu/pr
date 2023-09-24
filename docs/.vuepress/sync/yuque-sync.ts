import fs from 'fs-extra';
import path from 'path'
import request from 'request';
import * as cheerio from 'cheerio';
import { cookie as cookieStr, path_map, ua, ignore_docs } from './config.json';


const fetch = <T = any,>(url: string) => {
  return new Promise<T>((res, rej) => request.get({
    url,
    headers: { Cookie: cookieStr, UserActivation: ua },
  }, (err, resp, body) => {
    if (err) {
      rej(resp);
      return;
    }
    try {
      res(JSON.parse(body))
    } catch {
      res(body as any)
    }
  }))
}

interface DocNode {
  type: 'TITLE' | 'DOC'
  title: string
  uuid: string
  url: string
  parent_uuid: string
  doc_id: number
  level: number
  id: number
  child_uuid?: string
  open_window: number
  visible: number
  sibling_uuid: string
  children?: DocNode[]
  sibling?: DocNode;
  parent?: DocNode;
  child?: DocNode;
  prev_uuid?: string;
}

const fetchBooks = (prefix: string, bookUrl: string) => {
  return fetch(bookUrl).then((html) => {
    const $ = cheerio.load(html);
    const data = eval($('body script[nonce]').eq(0).text().match(/JSON.parse\(.*\)/)![0])
    const docList: DocNode[] = data.book.toc.filter(d => !ignore_docs.includes(d.title));
    const nodeMap = new Map<string, DocNode>();
    docList.forEach(doc => {
      nodeMap.set(doc.uuid, doc);
    });
    let firstNode: DocNode | undefined;
    docList.forEach(doc => {
      // currently, the list is ordered, parent node IS before child
      const parent = nodeMap.get(doc.parent_uuid);
      parent && (parent.children = parent!.children ? [...parent!.children, doc] : [doc]);
      doc.sibling = nodeMap.get(doc.sibling_uuid);
      doc.parent = parent;
    });
    docList.forEach((doc) => {
      if (!doc.prev_uuid) firstNode = doc;
      if (doc.children) {
        doc.child = doc.children.find(c => c.prev_uuid === c.parent_uuid);
      }
    });
    const ret = node2Sidebar(prefix, docList.filter(d => !d.parent_uuid));
    fs.writeFile('./docs/.vuepress/sidebar.json', JSON.stringify(ret, null, 2), () => void 0);
    if (!firstNode) {
      firstNode = docList[0];
    }
    return firstNode as DocNode;
  });
};

const downloadNode = (prefix: string, node: DocNode) => {
  if (!node) return;
  if (node.type === 'TITLE') {
    node.child && downloadNode(prefix, node.child);
  }
  if (node.url) {
    downloadMarkdown(
      `https://www.yuque.com${prefix}/${node.url}/markdown?attachment=true&latexcode=false&anchor=false&linebreak=false`,
      getPathForNode(prefix, node),
      node.title,
    );
  }
  if (node.sibling) {
    downloadNode(prefix, node.sibling);
  }
}
const root = path.join(process.cwd(), './docs');

/** 限制并发数，防止语雀拦截 */
const promiseQueue = <T extends (...args: any) => Promise<void>,>(size: number, fn: T) => {
  const pool: (Promise<void> | undefined)[] = new Array(size);
  let i = 0;
  const curry: T = (...args) => {
    const j = i % size;
    if (pool[j] !== undefined) {
      pool[j]!.then(() => {
        fn(...args);
      });
    } else {
      pool[j] = fn(...args);
    }
  }
  return curry;
};

const downloadMarkdown = promiseQueue(3, (url: string, to: string, title: string) => {
  const absPath = path.join(root, `${to}.md`);
  console.log(new Date, '###downloading', url, absPath, title);
  return new Promise<void>((res) => {
    fs.ensureDir(path.dirname(absPath)).then(() => {
      const fsWrite = fs.createWriteStream(absPath);
      fsWrite.write(`# ${title}\n`);
      let content = '';
      request({
        url,
        headers: {
          Cookie: cookieStr,
          'User-Agent': ua
        }
      }).on('data', (line) => {
        content += line.toString()
      }).on('close', () => {
        fsWrite.write(titleIndent(content));
        fsWrite.close();
        res();
      }).on('error', (err) => {
        console.error(err);
        process.exit();
      })
    });
  })
});

const titleIndent = (content: string) => {
  if (content.trim().startsWith('##')) return content;
  return content.replace(/^(#+) (\S+)/, (line, mark, title) => {
    return `${mark}# ${title}`;
  }).replaceAll(/\n(#+) (\S+)/g, (line, mark, title) => {
    return `\n${mark}# ${title}`;
  })
}

const downloadBook = (url: string) => {
  const prefix = new URL(url).pathname;
  fetchBooks(prefix, url).then((node) => {
    downloadNode(prefix, node);
  });
}

const getPathForNode = (prefix: string, node: DocNode) => {
  let c: DocNode | undefined = node;
  const folders: string[] = [];
  while(c) {
    folders.unshift((path_map as any)[c.title] || c.url || c.uuid);
    c = c.parent;
  }
  folders.unshift(prefix.split('/').slice(2).join('/'));
  return folders.join('/');
}

const node2Sidebar = (prefix: string, list?: DocNode[]) => {
  if (!list) return null;
  return list.map(node => {
    if (node.type === 'DOC') {
      return {
        id: node.id,
        title: node.title,
        path: getPathForNode(prefix, node)
      }
    }
    return {
      id: node.id,
      title: node.title,
      collapsable: true,
      children: node2Sidebar(prefix, node.children)
    };
  })
}


// fetch('https://www.yuque.com/api/mine/book_stacks')
downloadBook('https://www.yuque.com/xiwen-bxuha/pr');