var fs = require('fs');
const path = require('path');
const {argv} = require('node:process');
const appName = argv.slice(2)[0];
const DIR_ROOT = process.cwd();
const appDirStructure = path.resolve(DIR_ROOT, `apps/${appName}/src/js`);
const appIndexFile = path.resolve(DIR_ROOT, `apps/${appName}/src/js/index.js`);


const appStructureCreate =  async (dirName, fileName) => {

  if(!fs.existsSync(dirName)) {

    fs.mkdir(dirName, { recursive: true }, (err) => {
      err ? console.log(err) : console.log("\x1b[32m", `Directory created: ${dirName}`);

      fs.writeFile(fileName, '', err => {
        err ? console.log(err) : console.log("\x1b[32m", `File created: ${fileName}`);
      });
    });

  }

}

appStructureCreate(appDirStructure, appIndexFile);
