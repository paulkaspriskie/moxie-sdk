/**
 * @fileOverview React component template, used to write to component content to file via fs.writeFile().
 *
 * @author Paul Kaspriskie
 *
 * @requires lib/util/util-function.js:kebabCase
 */
const {kebabCase} = require('../util/util-functions.js');


/**
 * Generates root component of react app and dynamically names it according to name value.
 * @param {string} name value that represents root component name and jsx className.
 *
 * @return {string} contains react root component syntax that fs.writeFile uses to inject into file.
 */
const TEMPLATE_COMPONENT_INDEX_REACT = (name) => {
  return (
    `import React from 'react';\nimport { createRoot } from 'react-dom/client';\nimport "../scss/index.scss";
    \nconst App = () => {\n\treturn <div className="app-${kebabCase(name)}__container"><h1>${name}</h1></div>\n}
    \nconst root = createRoot(document.getElementById('root'));\nroot.render(<App />);`
  );
}

module.exports = { TEMPLATE_COMPONENT_INDEX_REACT }
