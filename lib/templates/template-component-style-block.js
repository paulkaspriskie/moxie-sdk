const {kebabCase} = require('../util/util-functions.js');


const TEMPLATE_COMPONENT_STYLE_BLOCK = (name) => {
  name = kebabCase(name);
  return `.app__${name}--container {\n\n}`;
}

module.exports = { TEMPLATE_COMPONENT_STYLE_BLOCK }
