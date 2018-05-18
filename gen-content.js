const fs = require('fs-extra');
const path = require('path');
const remark = require('remark');
const remarkHtml = require('remark-html');
const remarkToc = require('remark-toc');
const remarkMeta = require('remark-yaml-meta');
const tocUtil = require('mdast-util-toc');
const frontmatter = require('remark-frontmatter');

const versions = require('./content/versions.json');

versions.versions.forEach(v => {
  const filePath = path.resolve('./content', v.file);
  v.index = require(filePath);
  resolve(v.index.content, filePath.replace('index.json', ''));
});

fs.outputFileSync('./src/app/content/versions.json', JSON.stringify(versions), function(err) {
  if (err) {
    return console.log(err);
  }
});

function resolve(content, dir) {
  content.forEach(c => {
    if (c.file) {
      const file = fs.readFileSync(path.resolve(dir, c.file), 'utf8');
      // Main body
      remark()
        .use(remarkToc)
        .use(remarkHtml)
        .process(file, (err, result) => {
          c.body = String(result);
        });
      // Table of contents
      if (c.toc) {
        remark()
          .use(() => {
            return (node) => {
              const toc = tocUtil(node);
              return toc.map;
            };
          })
          .use(remarkHtml)
          .process(file, (err, result) => {
            c.tocBody = String(result);
          });
      }
    }
    if (c.children) {
      resolve(c.children, dir);
    }
  });
}
