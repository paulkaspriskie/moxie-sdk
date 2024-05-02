
const camelCase = (input) => {
  return input.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}


const kebabCase = (input) => {
  return input.replace(/\s+/g, '-').toLowerCase();
}


const pascalCase = (input) => {
  return input.split(/[ ,]+/).map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join('');
}


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
