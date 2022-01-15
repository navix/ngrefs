const fs = require('fs-extra');
const YAML = require('yaml');
const path = require("path");
const { marked } = require('marked');

const main = readYaml('_main.yaml');
console.log('MAIN', main);

const content2 = {
  title: main.title,
  sections: [],
};

for (const sectionName of main.sections) {
  const section = readYaml(`${sectionName}/_section.yaml`);
  content2.sections.push(section);
  section.pages = readPagesFromMenu(sectionName, section.menu);
}

const dist = path.resolve(__dirname, '../main/src/app/content/dist');
fs.outputFileSync(
  path.resolve(dist, 'content2.json'),
  JSON.stringify(content2, undefined, '  '),
);

function readYaml(p) {
  const file = fs.readFileSync(path.resolve(__dirname, 'converted', p), 'utf8');
  return YAML.parse(file);
}

function readPagesFromMenu(sectionName, items) {
  let pages = [];
  for (const menuItem of items) {
    if (menuItem.file) {
      const page = readPage(sectionName, menuItem.file);
      pages.push(page);
    }
    if (menuItem.children) {
      pages = [...pages, ...readPagesFromMenu(sectionName, menuItem.children)];
    }
  }
  return pages;
}

function readPage(sectionName, file) {
  const page = readYaml(`${sectionName}/${file}.yaml`);
  return {
    file,
    ...page,
    content: processPageContent(page.type, page.content),
  };
}

function processPageContent(type, content) {
  if (!type) {
    return undefined;
  }
  switch (type) {
    case 'simple':
      return {
        text: marked.parse(content.text),
      }
  }
}
