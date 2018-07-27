const path = require('path');
const glob = require('glob');
const fs = require('fs-extra');
const matter = require('front-matter');

const versionsPath = './src/app/content';
const versions = ['6'];

versions.forEach(v => {
  const version = {};
  // Scan md files
  const mdFiles = glob.sync(path.resolve(versionsPath, v, 'messages') + '/**/*.md');
  mdFiles.forEach(fullPath => {
    console.log(`Read md: parse ${fullPath}`);
    const file = fs.readFileSync(fullPath, {encoding: 'utf8'});
    const parsed = matter(file);
    const meta = parsed.attributes;
    if (!version[meta.id]) {
      version[meta.id] = {};
    }
    version[meta.id][meta.lang] = parsed.body;
  });
  // Scan json files
  const jsonFiles = glob.sync(path.resolve(versionsPath, v, 'messages') + '/**/*.json');
  jsonFiles.forEach(fullPath => {
    console.log(`Read json: parse ${fullPath}`);
    const file = fs.readFileSync(fullPath, {encoding: 'utf8'});
    const data = JSON.parse(file);
    if (data.lang && data.messages) {
      const lang = data.lang;
      for (const id in data.messages) {
        if (!version[id]) {
          version[id] = {};
        }
        version[id][lang] = data.messages[id];
      }
    }
  });
  // Save
  fs.outputFile(path.resolve(versionsPath, v, '_messages.json'), JSON.stringify(version), function(err) {
    if (err) {
      return console.log(err);
    }
  });
  // console.log(version);
});
