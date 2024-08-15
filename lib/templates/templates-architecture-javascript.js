/**
 * @fileOverview React component template, used to write to component content to file via fs.writeFile().
 *
 * @author Paul Kaspriskie
 *
 * @requires lib/util/util-function.js:kebabCase
 * @requires lib/util/util-function.js:PascalCase
 */
const {kebabCase} = require('../util/util-functions.js');
const {pascalCase} = require('../util/util-functions.js');


/**
 * Generates basic react component and dynamically names component and assigns classname according to name arg.
 * @param {string} name value that represents component name and jsx className.
 *
 * @return {string} contains react component syntax that fs.writeFile uses to inject into file.
 */
const TEMPLATE_COMPONENT_REACT = (name, componentName) => {
  return (
    `import React from 'react';
    \nconst ${componentName} = () => {\n\treturn <div className="component-${kebabCase(name)}__container"><h1>${name}</h1></div>\n}
    \nexport default ${componentName};`
  );
}


/**
 * Generates root component of react app and dynamically names it according to name value.
 * @param {string} name value that represents root component name and jsx className.
 *
 * @return {string} contains react root component syntax that fs.writeFile uses to inject into file.
 */
const TEMPLATE_COMPONENT_REACT_INDEX = (name) => {
  return (
    `import React from 'react';\nimport { createRoot } from 'react-dom/client';\nimport "../scss/index.scss";
    \nconst App = () => {\n\treturn <div className="app-${kebabCase(name)}__container"><h1>${name}</h1></div>\n}
    \nconst root = createRoot(document.getElementById('root'));\nroot.render(<App />);`
  );
}


module.exports = {
  TEMPLATE_COMPONENT_REACT,
  TEMPLATE_COMPONENT_REACT_INDEX
}
