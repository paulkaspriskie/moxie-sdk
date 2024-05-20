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
const cmdType = process.env.npm_lifecycle_event;
const cliInput = require('node:process').argv.slice(2)[0];
const { TEMPLATE_COMPONENT_REACT_INDEX } = require('../templates/templates-architecture-javascript.js');
const { TEMPLATE_COMPONENT_STYLE_BLOCK } = require('../templates/templates-architecture-styles.js');
const { promptResponse } = require('./util-functions.js');


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
const archCreate = (dirName, fileName, fileContent) => {

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
 *
 * @returns {string} values of paths: <app-name>/src/<type>, <app-name>/src/<type>/index.<type> and index file content.
 */
const archPathBuild = async (inputValue) => {

  if(inputValue) {

    if(cmdType === 'create-app') {

      let dirJS = path.resolve(process.cwd(), `apps/${inputValue}/src/js`),
          dirSCSS = path.resolve(process.cwd(), `apps/${inputValue}/src/scss`),
          indexFileJS = path.resolve(process.cwd(), `apps/${inputValue}/src/js/index.js`),
          indexFileSCSS = path.resolve(process.cwd(), `apps/${inputValue}/src/scss/index.scss`),
          fileContentJS = TEMPLATE_COMPONENT_REACT_INDEX(inputValue);
          fileContentSCSS = TEMPLATE_COMPONENT_STYLE_BLOCK(inputValue);

       await archCreate(dirJS, indexFileJS, fileContentJS);
       await archCreate(dirSCSS, indexFileSCSS, fileContentSCSS);

    } else if(cmdType === 'create-component') {

      let appName = await promptResponse('Enter app name in which component will be created: '),
          dirComponentJS = path.resolve(process.cwd(), `apps/${appName}/src/js/components/${inputValue}`);
          dirComponentSCSS = path.resolve(process.cwd(), `apps/${appName}/src/scss/components/${inputValue}`),
          fileComponentJS = path.resolve(dirComponentJS, `${inputValue}.js`),
          fileComponentSCSS = path.resolve(dirComponentSCSS, `${inputValue}.scss`);

    }

  } else {

    console.log('No app name inputed, please run: npm run create-app <app-name>');
    process.exit();

  }

}


(async () => {
  await archPathBuild(cliInput);
})();
