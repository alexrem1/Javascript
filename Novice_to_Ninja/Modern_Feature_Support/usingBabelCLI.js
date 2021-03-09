// before conversion

const greet = (name) => {
  console.log(`hello ${name}`);
};

greet();

// convert via node_modules/.bin/babel Modern_Feature_Support/usingBabelCLI.js -o Modern_Feature_Support/usingBabelCLIResult.js
// OR
// DEFINE A SCRIPT INSIDE PACKAGE.JSON
// OR
// use a special watch flag eg -w to run script automatically
