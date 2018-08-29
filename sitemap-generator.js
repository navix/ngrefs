const path = require('path');
const {toXML} = require('jstoxml');
const fs = require('fs-extra');

const content = require('./projects/main/src/app/content/content');

const root = 'https://ngrefs.com';
const sitemap = {
  urlset: [
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
    sitemap.urlset.push({
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
        version.langs.forEach(lang => {
          sitemap.urlset.push({
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

fs.outputFileSync(path.resolve('./projects/main/src/sitemap.xml'), toXML(sitemap));

console.log('Sitemap generated!');
