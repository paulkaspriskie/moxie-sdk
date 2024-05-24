/**
 * @fileOverview Style block template, used to dynamically write css blocks to file via fs.writeFile().
 *
 * @author Paul Kaspriskie
 *
 * @requires lib/util/util-function.js:kebabCase
 */
const {kebabCase} = require('../util/util-functions.js');


/**
 * Generates css app container block using name input to create a class name utilizing BEM methodology.
 * @param {string} name value that represents app container name.
 *
 * @return {string} contains app container css block that fs.writeFile uses to inject into file.
 */
const TEMPLATE_STYLE_APP_BLOCK = (name) => {
  return `.app-${kebabCase(name)}__container {\n\n}`;
}


/**
 * Generates css component container block using name input to create a class name utilizing BEM methodology.
 * @param {string} name value that represents component container name.
 *
 * @return {string} contains component container css block that fs.writeFile uses to inject into file.
 */
const TEMPLATE_STYLE_COMPONENT_BLOCK = (name) => {
  return `.component-${kebabCase(name)}__container {\n\n}`
}


module.exports = {
  TEMPLATE_STYLE_APP_BLOCK,
  TEMPLATE_STYLE_COMPONENT_BLOCK
}
