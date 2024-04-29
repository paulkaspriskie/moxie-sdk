const fs = require('fs');
const path = require('path');
const cliInput = require('node:process').argv.slice(2)[0];
const {TEMPLATE_COMPONENT_INDEX_REACT} = require('../templates/template-component-index-react.js');
const {TEMPLATE_COMPONENT_STYLE_BLOCK} = require('../templates/template-component-style-block.js');


const appStructureCreate = (dirName, fileName, fileContent) => {

  if(!fs.existsSync(dirName)) {

    fs.mkdir(dirName, { recursive: true }, (err) => {
      err ? console.log(err) : console.log("\x1b[32m", `Directory created: ${dirName}`);

      fs.writeFile(fileName, fileContent, err => {
        err ? console.log(err) : console.log("\x1b[32m", `File created: ${fileName}`);
      });
    });

  }

}


const appPathBuild = (name, type) => {

  const DIR_ROOT = process.cwd();
  const appDirPath = path.resolve(DIR_ROOT, `apps/${name}/src/${type}`);
  const appFileIndexPath = path.resolve(DIR_ROOT, `apps/${name}/src/${type}/index.${type}`);
  const fileContent = type === "js" ? TEMPLATE_COMPONENT_INDEX_REACT(name) : TEMPLATE_COMPONENT_STYLE_BLOCK(name);

  appStructureCreate(appDirPath, appFileIndexPath, fileContent);

}


appPathBuild(cliInput, "js");
appPathBuild(cliInput, "scss");
