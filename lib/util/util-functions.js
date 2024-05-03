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
 * Converts string to kebab case (kebab-case) format.
 * @param {string} input to be converted to kebab case.
 *
 * @returns {string} the input value converted to kebab case.
 */
const kebabCase = (input) => {
  return input.replace(/\s+/g, '-').toLowerCase();
}


/*
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


/*
 * Returns first directory name in ./apps/ directory if no input is defined.
 * Returns input value if input is defined.
 * @param {string} input value that is returned if one is defined.
 *
 * @returns {string} input value or first directory name within ./apps/ directory.
 */
const setDefaultApp = (input) => {

  const fs = require('node:fs');
  const path = require('path');
  const DIR_APPS = path.resolve(process.cwd(), 'apps');

  if(!input && fs.readdirSync(DIR_APPS).length > 0) {
    const firstDir = fs.readdirSync(DIR_APPS)[0];
    const fileStat = fs.statSync(path.resolve(DIR_APPS, firstDir));

    if(fileStat.isDirectory()) {
      return firstDir;
    }
  }

}


module.exports = {
  camelCase,
  kebabCase,
  pascalCase,
  setDefaultApp
}
