
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


module.exports = {
  camelCase,
  kebabCase,
  pascalCase
}
