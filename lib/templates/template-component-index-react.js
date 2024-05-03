const {pascalCase} = require('../util/util-functions.js');
const {kebabCase} = require('../util/util-functions.js');


const TEMPLATE_COMPONENT_INDEX_REACT = (name) => {
  return (
    `import React from 'react';\nimport { createRoot } from 'react-dom/client';\nimport "../scss/index.scss";
    \nconst ${pascalCase(name)} = () => {\n\treturn <div className="app-${kebabCase(name)}__container"><h1>${name}</h1></div>\n}
    \nconst root = createRoot(document.getElementById('root'));\nroot.render(<${pascalCase(name)} />);`
  );
}

module.exports = { TEMPLATE_COMPONENT_INDEX_REACT }
