const fs = require('fs');
const path = require('path');
const {argv} = require('node:process');
const cliInput = argv.slice(2)[0];


const appStructureCreate = (dirName, fileName) => {

  if(!fs.existsSync(dirName)) {

    fs.mkdir(dirName, { recursive: true }, (err) => {
      err ? console.log(err) : console.log("\x1b[32m", `Directory created: ${dirName}`);

      fs.writeFile(fileName, '', err => {
        err ? console.log(err) : console.log("\x1b[32m", `File created: ${fileName}`);
      });
    });

  }

}


const appPathBuild = (name, type) => {
  const DIR_ROOT = process.cwd();
  const appDirPath = path.resolve(DIR_ROOT, `apps/${name}/src/${type}`);
  const appFileIndexPath = path.resolve(DIR_ROOT, `apps/${name}/src/${type}/index.${type}`);

  appStructureCreate(appDirPath, appFileIndexPath);
}


appPathBuild(cliInput, "js");
appPathBuild(cliInput, "scss");
