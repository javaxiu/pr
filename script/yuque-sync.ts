import fs from 'fs-extra';
import path from 'path'
import request from 'request';
import * as cheerio from 'cheerio';
import { cookie as cookieStr, path_map } from './config.json';


const fetch = <T = any,>(url: string) => {
  return new Promise<T>((res, rej) => request.get({
    url,
    headers: { Cookie: cookieStr, UserActivation: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36' },
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

const fetchBooks = (bookUrl: string) => {
  return fetch(bookUrl).then((html) => {
    const $ = cheerio.load(html);
    const data = eval($('body script[nonce]').eq(0).text().match(/JSON.parse\(.*\)/)![0])
    const docList: DocNode[] = data.book.toc;
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
    })
    // or find a node has no parent and node left
    return firstNode as DocNode;
  });
};

const downloadNode = (prefix: string, node: DocNode) => {
  if (node.type === 'TITLE') {
    node.child && downloadNode(prefix, node.child);
  }
  if (node.url) {
    let c: DocNode | undefined = node;
    const folders = [];
    while(c) {
      folders.unshift((path_map as any)[c.title] || c.url || c.uuid);
      c = c.parent;
    }
    folders.unshift(prefix.split('/').slice(2).join('/'));
    downloadMarkdown(
      `https://www.yuque.com${prefix}/${node.url}/markdown?attachment=true&latexcode=false&anchor=false&linebreak=false`,
      folders.join('/'),
      node.title,
    );
  }
  if (node.sibling) {
    downloadNode(prefix, node.sibling);
  }
}
const root = path.join(process.cwd(), './docs');
const downloadMarkdown = (url: string, to: string, title: string) => {
  const absPath = path.join(root, `${to}.md`);
  console.log('###downloading', url, absPath, title);
  fs.ensureDir(path.dirname(absPath)).then(() => {
    const fsWrite = fs.createWriteStream(absPath);
    fsWrite.write(`# ${title}\n`);
    let content = '';
    request({
      url,
      headers: {
        Cookie: cookieStr,
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36'
      }
    }).on('data', (line) => {
      content += line.toString()
    }).on('close', () => {
      fsWrite.write(titleIndent(content));
      fsWrite.close();
    })
  });
}

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
  fetchBooks(url).then((node) => {
    downloadNode(prefix, node);
  });
}

// fetch('https://www.yuque.com/api/mine/book_stacks')
downloadBook('https://www.yuque.com/xiwen-bxuha/pr');
