const path = require('path');
const {toXML} = require('jstoxml');
const fs = require('fs-extra');

const content = require('./projects/main/src/app/content/content');

const root = 'https://ngrefs.com';
const sitemap = {
  _name: 'urlset',
  _attrs: {
    'xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9',
  },
  _content: [
    {
      url: {
        loc: root,
        priority: 1,
        changefreq: 'daily',
      }
    }
  ]
};

content.versions.forEach(version => {
  version.langs.forEach(lang => {
    sitemap._content.push({
      url: {
        loc: `${root}/${lang}/${version.url}`,
        priority: 0.9,
        changefreq: 'daily',
      },
    });
  });
  version.sections
    .filter(section => !section.disabled)
    .forEach(section => {
      section.pages.forEach(page => {
        version.langs
          .filter(lang => section.langs[lang])
          .forEach(lang => {
          sitemap._content.push({
            url: {
              loc: `${root}/${lang}/${version.url}/${section.url}/${page.url}`,
              priority: 0.8,
              changefreq: 'daily',
            },
          });
        });
      });
    });
});

fs.outputFileSync(
  path.resolve('./projects/main/src/sitemap.xml'),
  toXML(sitemap, {
    header: '<?xml version="1.0" encoding="UTF-8"?>',
  })
);

console.log('Sitemap generated!');
