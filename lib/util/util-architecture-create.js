/**
 * @fileOverview NodeJS script that retrieves CLI argument value <app-name> and creates corresponding app file structure.
 * Creates app architecture within ./apps/<app-name>/ directory, including entrypoint js/scss index files and file content.
 *
 * @author Paul Kaspriskie
 *
 * @requires NODEJS:fs
 * @requires NODEJS:path
 * @requires lib/data/create-data.json
 * @requires lib/templates/template-architecture-javascript.js:TEMPLATE_COMPONENT_INDEX_REACT
 * @requires lib/templates/template-architecture-styles.js:TEMPLATE_STYLE_APP_BLOCK
 * @requires lib/util/util-functions.js:fileCreate
 * @requires lib/util/util-functions.js:pascalCase
 * @requires lib/util/util-functions.js:promptResponse
 */
const fs = require('fs');
const path = require('path');
const cmdType = process.env.npm_lifecycle_event;
const cliInput = require('node:process').argv.slice(2)[0];
const pathData = require('../data/create-data.json');
const { TEMPLATE_COMPONENT_REACT, TEMPLATE_COMPONENT_REACT_INDEX } = require('../templates/templates-architecture-javascript.js');
const { TEMPLATE_STYLE_APP_BLOCK } = require('../templates/templates-architecture-styles.js');
const { dirFilter, fileCreate, pascalCase, promptResponse } = require('./util-functions.js');


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
const archBuildSystem = (dirPath, filePath, fileContent) => {

  fs.access(dirPath, fs.constants.F_OK, (err) => {

    if(err) {

      fs.mkdir(dirPath, {recursive: true}, (err) => {

        !err ? console.log("\x1b[32m", `Directory Created: ${dirPath}`) : console.log(err);
        fileCreate(filePath, fileContent);

      });

    } else {

      fileCreate(filePath, fileContent);

    }

  });

}


/**
 * Dynamically builds absolute path(s) of apps/components file system from provided arguments.
 * Builds unique file system paths based on command type. (create-app | create-component)
 *
 * @param {string} type represents command type, create-app or create-component.
 * @param {string} appName represents name of app provide by cli input.
 * @param {string} filePath represents path to component/app file(s) and parent directory.
 * @param {string} componentName represents name of component provided by cli input.
 *
 * @returns {string} absolute path(s) to component/app file system.
 */
const archBuildPath = (type, appName, filePath, componentName) => {

  if(type === 'create-app') {

    return path.resolve(process.cwd(), 'apps', appName, filePath);

  } else if(type === 'create-component') {

    if(componentName) {

      return path.resolve(process.cwd(), 'apps', appName, filePath, componentName);

    } else {

      return path.resolve(process.cwd(), 'apps', appName, filePath);

    }

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
const archBuildInit = (inputValue, data) => {

  if(inputValue) {

    data.pathData.map(async (item, i) => {

      if(cmdType === 'create-app') {

        let jsDirPath = archBuildPath(cmdType, inputValue, item.jsDirPath),
            jsFilePath = archBuildPath(cmdType, inputValue, item.jsFilePath),
            scssDirPath = archBuildPath(cmdType, inputValue, item.scssDirPath),
            scssFilePath = archBuildPath(cmdType, inputValue, item.scssFilePath);

        archBuildSystem(jsDirPath, jsFilePath, TEMPLATE_COMPONENT_REACT_INDEX(inputValue));
        archBuildSystem(scssDirPath, scssFilePath, TEMPLATE_STYLE_APP_BLOCK(inputValue));


      } else if(cmdType === 'create-component') {

        const appsArray = dirFilter(path.resolve(process.cwd(), 'apps'));
        const appName = await promptResponse('Enter app name in which component will be created: ');

        let jsComponentDir = archBuildPath(cmdType, appName, item.jsComponentDir),
            jsComponentFile = archBuildPath(cmdType, appName, item.jsComponentDir, `${pascalCase(inputValue)}.js`),
            scssComponentDir = archBuildPath(cmdType, appName, item.scssComponentDir),
            scssComponentFile = archBuildPath(cmdType, appName, item.scssComponentDir, `_${inputValue}.scss`);

        if(appsArray.includes(appName)) {

          archBuildSystem(jsComponentDir, jsComponentFile, TEMPLATE_COMPONENT_REACT(inputValue));
          archBuildSystem(scssComponentDir, scssComponentFile, '');

        } else {

          console.log(`Invalid Input: no app named ${appName} found, please enter a valid app name.`)

        }

      }

    });

  } else {

    console.log('No app name inputed, please run: npm run create-app <app-name>');
    process.exit();

  }

}


archBuildInit(cliInput, pathData);
