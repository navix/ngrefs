const fs = require('fs-extra');
const path = require("path");

const root = path.resolve(__dirname, '../../..');
const sourceCliPath = path.resolve(root, 'sources/angular-cli');


run().then();

async function run() {
  // copy ng-new
  fs.copySync(
    path.resolve(sourceCliPath, 'packages/schematics/angular/ng-new/schema.json'),
    path.resolve(__dirname, 'app/sections/cli/pages/commands/ng-new/schema.json')
  );

  console.log('DONE 🦖');
}
