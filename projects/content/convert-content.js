const content = require('./content.json');
const fs = require("fs-extra");
const path = require("path");
const YAML = require('yaml');

const dist = path.resolve(__dirname, 'converted');

fs.emptyDirSync(dist);

for (const version of content.versions) {
  writeYaml(
    '_main.yaml',
    {
      title: '🍀 Angular 13',
      sections: version.sections.map(s => s.url),
    },
  );
  for (const section of version.sections) {
    createDir(section.url);
    writeYaml(
      `${section.url}/_section.yaml`,
      {
        title: section.title,
        url: section.url,
        color: section.color,
        menu: section.pages.map(p => ({
          label: p.title,
          file: p.url,
        })),
      },
    );
    for (const page of section.pages) {
      writeYaml(
        `${section.url}/${page.url}.yaml`,
        {
          title: page.title,
          url: page.url,
          entries: page.entries.map(e => {
            delete e.id;
            return e;
          }),
        },
      );
    }
  }
  // fs.outputFileSync(
  //   path.resolve(dist, version.url + '.json'),
  //   JSON.stringify(version),
  // );
}

function createDir(p) {
  fs.mkdirpSync(path.resolve(dist, p));
}

function writeYaml(p, value) {
  fs.outputFileSync(
    path.resolve(path.resolve(dist, p)),
    YAML.stringify(value),
  );
}
