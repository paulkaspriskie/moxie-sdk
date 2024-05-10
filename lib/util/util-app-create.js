/**
 * @fileOverview NodeJS script that retrieves CLI argument value <app-name> and creates corresponding app file structure.
 * Creates app architecture within ./apps/<app-name>/ directory, including entrypoint js/scss index files and file content.
 *
 * @author Paul Kaspriskie
 *
 * @requires NODEJS:fs
 * @requires NODEJS:path
 * @requires lib/templates/template-architecture-javascript.js:TEMPLATE_COMPONENT_INDEX_REACT
 * @requires lib/templates/template-architecture-styles.js:TEMPLATE_COMPONENT_STYLE_BLOCK
 */
const fs = require('fs');
const path = require('path');
const cliInput = require('node:process').argv.slice(2)[0];
const {TEMPLATE_COMPONENT_REACT_INDEX} = require('../templates/templates-architecture-javascript.js');
const {TEMPLATE_COMPONENT_STYLE_BLOCK} = require('../templates/templates-architecture-styles.js');


/**
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
 * @param {string} appName value that represents app name which is determined by CLI argument input.
 * @param {string} fileType value that represnets what kind of directory/index file path should be created. (js|scss)
 *
 * @returns {string} values of paths: <app-name>/src/<type>, <app-name>/src/<type>/index.<type> and index file content.
 */
const appPathBuild = (appName, fileType) => {

  if(appName) {

    const DIR_ROOT = process.cwd(),
          appDirPath = path.resolve(DIR_ROOT, `apps/${appName}/src/${fileType}`),
          appFileIndexPath = path.resolve(DIR_ROOT, `apps/${appName}/src/${fileType}/index.${fileType}`),
          fileContent = fileType === "js" ? TEMPLATE_COMPONENT_REACT_INDEX(appName) : TEMPLATE_COMPONENT_STYLE_BLOCK(appName);

    appStructureCreate(appDirPath, appFileIndexPath, fileContent);

  } else {

    console.log('No app name inputed, please run: npm run create-app <app-name>');
    process.exit();

  }

}


appPathBuild(cliInput, "js");
appPathBuild(cliInput, "scss");
