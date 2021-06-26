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

// @todo remove redirect only urls (after angular 13+)
content.versions.forEach(version => {
  // main page
  sitemap._content.push({
    url: {
      loc: `${root}`,
      priority: 0.9,
      changefreq: 'monthly',
    },
  });
  routes.push(`/v6`);
  routes.push(`/v7`);
  routes.push(`/v8`);
  routes.push(`/v9`);
  routes.push(`/v10`);
  routes.push(`/latest`);
  // sections
  version.sections
    .filter(section => !section.disabled)
    .forEach(section => {
      routes.push(`/${section.url}`);
      routes.push(`/v6/${section.url}`);
      routes.push(`/v7/${section.url}`);
      routes.push(`/v8/${section.url}`);
      routes.push(`/v9/${section.url}`);
      routes.push(`/v10/${section.url}`);
      routes.push(`/latest/${section.url}`);
      section.pages.forEach(page => {
        sitemap._content.push({
          url: {
            loc: `${root}/${section.url}/${page.url}`,
            priority: 0.8,
            changefreq: 'monthly',
          },
        });
        routes.push(`/${section.url}/${page.url}`);
        routes.push(`/v6/${section.url}/${page.url}`);
        routes.push(`/v7/${section.url}/${page.url}`);
        routes.push(`/v8/${section.url}/${page.url}`);
        routes.push(`/v9/${section.url}/${page.url}`);
        routes.push(`/v10/${section.url}/${page.url}`);
        routes.push(`/latest/${section.url}/${page.url}`);
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
