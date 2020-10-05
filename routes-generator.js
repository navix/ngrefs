const path = require('path');
const {toXML} = require('jstoxml');
const fs = require('fs-extra');

const content = require('./projects/content/content.json');

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
const routes = ['/'];

content.versions.forEach(version => {
  // main page
  sitemap._content.push({
    url: {
      loc: `${root}/${version.url}`,
      priority: 0.9,
      changefreq: 'daily',
    },
  });
  routes.push(`/${version.url}`);
  routes.push(`/en/${version.url}`);
  // sections
  version.sections
    .filter(section => !section.disabled)
    .forEach(section => {
      routes.push(`/${version.url}/${section.url}`);
      section.pages.forEach(page => {
        sitemap._content.push({
          url: {
            loc: `${root}/${version.url}/${section.url}/${page.url}`,
            priority: 0.8,
            changefreq: 'daily',
          },
        });
        routes.push(`/${version.url}/${section.url}/${page.url}`);
        routes.push(`/en/${version.url}/${section.url}/${page.url}`);
      });
    });
});

fs.outputFileSync(
  path.resolve('./projects/main/src/sitemap.xml'),
  toXML(sitemap, {
    header: '<?xml version="1.0" encoding="UTF-8"?>',
  })
);

fs.outputFileSync(
  path.resolve('./projects/main/src/routes.txt'),
  routes.join(`\n`),
);

console.log('Routes & sitemap generated!');
