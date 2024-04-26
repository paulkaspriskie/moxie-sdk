var fs = require('fs');
const path = require('path');
const {argv} = require('node:process');
const appName = argv.slice(2)[0];
const DIR_ROOT = process.cwd();
const appRootDir = path.resolve(DIR_ROOT, `apps/${appName}`);

if (!fs.existsSync(appRootDir)){
  fs.mkdirSync(appRootDir, { recursive: true });
}
