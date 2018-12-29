const exec = require('child_process').exec;
const fs = require('fs-extra');
const path = require('path');

exec('git rev-parse --short HEAD', {
  cwd: './sources/angular'
}, (error, stdout, stderr) => {
  // work with result
  console.log('stdout', stdout);
  if (stdout) {
    const contentPath = path.resolve(__dirname, './src/app/apis/angular.json');
    const content = require(contentPath);
    content.rev = stdout.trim();
    fs.writeFileSync(contentPath, JSON.stringify(content));
    console.log(`angular.json updated (rev: ${content.rev})`);
  }
});
