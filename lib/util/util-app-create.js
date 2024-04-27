var fs = require('fs');
const path = require('path');
const {argv} = require('node:process');
const appName = argv.slice(2)[0];
const DIR_ROOT = process.cwd();
const appDirStructure = path.resolve(DIR_ROOT, `apps/${appName}/src/js`);
const appIndexFile = path.resolve(DIR_ROOT, `apps/${appName}/src/js/index.js`);


if (!fs.existsSync(appDirStructure)) {
  fs.mkdir(appDirStructure, { recursive: true }, (err) => {
    if (err) throw err;
  });
}


fs.open(appIndexFile,'r', (err, fd) => {
  if (err) {
    fs.writeFile(appIndexFile, '', err => {
      if(err) {
        console.log(err);
      }
      console.log("The file was saved!");
    });
  } else {
    console.log("The file exists!");
  }
});
