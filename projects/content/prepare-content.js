const path = require('path');
const hljs = require("highlight.js/lib/core");
const fs = require('fs-extra');
const marked = require('marked');

hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'));
hljs.registerLanguage('scss', require('highlight.js/lib/languages/scss'));
hljs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'));
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));
hljs.registerLanguage('plaintext', require('highlight.js/lib/languages/plaintext'));

marked.setOptions({
  highlight: function(code, language) {
    const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
    return hljs.highlight(validLanguage, code).value;
  },
});

console.log('Content preparing tool is working..');

const dist = path.resolve(__dirname, '../main/src/app/content/dist');
console.log({dist});

async function run() {
  const content = require('./content.json');
  console.log({content});

  for (const version of content.versions) {
    const rendered = deepRender(version);
    fs.outputFileSync(
      path.resolve(dist, version.url + '.json'),
      JSON.stringify(version),
    );
  }

  const versionsDigest = content.versions.map(version => ({
    id: version.id,
    url: version.url,
    title: version.title,
    default: version.default,
    sections: version.sections.map(section => ({
      id: section.id,
      url: section.url,
      title: section.title,
      color: section.color,
    })),
  }));
  fs.outputFileSync(
    path.resolve(dist, 'versions-digest.json'),
    JSON.stringify({versionsDigest}),
  );
}

run()
  .catch(err => {
    console.error(err);
  })
  .then(() => {
  });


function deepRender(obj) {
  if (Array.isArray(obj)) {
    for (const val of obj) {
      if (typeof obj === 'object') {
        deepRender(val);
      }
    }
  } else if (obj !== null || typeof obj === 'object') {
    if (obj.type === 'text') {
      obj.text = marked(obj.text);
    } else if (obj.type === 'demo') {
      obj.source = marked(obj.source);
    } else {
      for (const key in obj) {
        const val = obj[key];
        if (val !== null && typeof val === 'object') {
          deepRender(val);
        }
      }
    }
  }
}
