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
const TEMPLATE_COMPONENT_STYLE_BLOCK = (name) => {
  name = kebabCase(name);
  return `.app-${name}__container {\n\n}`;
}

module.exports = { TEMPLATE_COMPONENT_STYLE_BLOCK }
