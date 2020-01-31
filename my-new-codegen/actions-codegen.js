const { parse } = require('graphql');

const templater = (actionName, actionsSdl, derive) => {

  // parse the actions SDL into an AST
  let ast;
  try {
    ast = parse(actionsSdl)
  } catch (e) {
    throw Error('invalid sdl')
  }

  return [
    {
      name: 'file1.md',
      content: '# File 1\n\nThisss is file1 generated through the script in `my-new-codegen/actions-codegen.js`.'
    },
    {
      name: 'file2.md',
      content: '# File 2\n\nThis is the second file generated through the script in `my-new-codegen/actions-codegen.js`.'
    }
  ];

};
