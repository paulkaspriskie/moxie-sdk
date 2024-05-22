/**
 * @fileOverview A collection of utility functions for use within all appications.
 * Includes commonly used string manipulation logic and CLI argument value capture function(s).
 *
 * @author Paul Kaspriskie
 *
 * @requires NODEJS:fs
 * @requires NODEJS:path
 */
const fs = require('node:fs');
const path = require('path');


/**
 * loops through files of specific directory and returns an array of all child directory names.
 * @param {string} dirPath path to directory that is looped and filtered of files.
 *
 * @return {array} contains all child directory names from specified directory.
 */
const dirFilter = (dirPath) => {

  return fs.readdirSync(dirPath).map((item) => {

    const fileStat = fs.statSync(path.resolve(dirPath, item));

    if(fileStat.isDirectory()) {

      return item;

    }

  }).filter(Boolean);

}


/**
 * Converts string to cammel case (camelCase) format.
 * @param {string} input to be converted to camel case.
 *
 * @returns {string} the input value converted to camel case.
 */
const camelCase = (input) => {
  return input.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}


/**
 * Checks if file exists, creates file if none exists.
 * @param {string} filePath represents file to be created.
 *
 * @returns {file} writes file to specified path.
 */
const fileCreate = (filePath) => {

  fs.access(filePath, fs.constants.F_OK, (err) => {

    if(err) {

      fs.writeFile(filePath, '', (err) => {

        !err ? console.log("\x1b[32m", `File Created: ${filePath}`) : console.log(err);

      });

    } else {

      err ? console.log(err) : null;

    }

  });

}


/**
 * Converts string to kebab case (kebab-case) format.
 * @param {string} input to be converted to kebab case.
 *
 * @returns {string} the input value converted to kebab case.
 */
const kebabCase = (input) => {
  return input.replace(/\s+/g, '-').toLowerCase();
}


/**
 * Convert sting to pascasl case (PascalCase) format.
 * @param {string} input to converted to pascal case.
 *
 * @returns {string} the input value converted to pascal case.
 */
const pascalCase = (input) => {
  return input.split(/[ ,]+/).map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join('');
}


/**
 * Takes question argument, creates CLI prompt and returns answer to prompt.
 * @param {string} q represents question to be prompted to the CLI.
 *
 * @returns {string} answer to question specified in argument.
 */
const promptResponse = (q) => {

  const readline = require('node:readline');

  return new Promise(resolve => {

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question(q, (answer) => {
      resolve(answer);
      rl.close();
    });

  });

}


/**
 * Returns first directory name in ./apps/ directory if no input is defined.
 * Returns input value if input is defined.
 * @param {string} input value that is returned if one is defined.
 *
 * @returns {string} input value or first directory name within ./apps/ directory.
 */
const setDefaultApp = (input) => {

  const DIR_APPS = path.resolve(process.cwd(), 'apps');
  const dirArray = dirFilter(DIR_APPS);

  if(!input) {

    if(dirArray.length > 0) {

      return dirArray[0];

    } else {

      console.log(`No applications found in ${DIR_APPS}, please run: npm run create-app.`);
      process.exit();

    }

  } else {

    return input;

  }

}


module.exports = {
  dirFilter,
  camelCase,
  kebabCase,
  pascalCase,
  promptResponse,
  setDefaultApp
}
