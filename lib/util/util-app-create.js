const fs = require('fs');
const path = require('path');
const cliInput = require('node:process').argv.slice(2)[0];
const {TEMPLATE_COMPONENT_INDEX_REACT} = require('../templates/template-component-index-react.js');
const {TEMPLATE_COMPONENT_STYLE_BLOCK} = require('../templates/template-component-style-block.js');


/*
 * Creates directory if specified directory name does not exsist.
 * Creates js|scss index file within <app-name>/src/<type>/ directory.
 * Injects file content dynamically depended on file type.
 * @param {string} dirName value of directory to be created if one doesn't exsist.
 * @param {string} fileName value of index.js|scss file to be created within <app-name>/src/<type> directory.
 * @param {string} fileContent value of content to be injected into index.js|scss file.
 *
 * @returns {string} creation of directories and index files specified by dirName/fileName and corresponding file content.
 */
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


/**
 * Builds path(s) of new app with app name specified by CLI argument.
 * Creates path(s) for src/js|scss directory and entrypoint index files.
 * Determines what content template to use based on type value provided.
 * @param {string} name value that represents app name which is determined by CLI argument input.
 * @param {string} type value that represnets what kind of directory/index file path should be created. (js|scss)
 *
 * @returns {string} values of paths: <app-name>/src/<type>, <app-name>/src/<type>/index.<type> and index file content.
 */
const appPathBuild = (name, type) => {

  const DIR_ROOT = process.cwd();
  const appDirPath = path.resolve(DIR_ROOT, `apps/${name}/src/${type}`);
  const appFileIndexPath = path.resolve(DIR_ROOT, `apps/${name}/src/${type}/index.${type}`);
  const fileContent = type === "js" ? TEMPLATE_COMPONENT_INDEX_REACT(name) : TEMPLATE_COMPONENT_STYLE_BLOCK(name);

  appStructureCreate(appDirPath, appFileIndexPath, fileContent);

}


appPathBuild(cliInput, "js");
appPathBuild(cliInput, "scss");
