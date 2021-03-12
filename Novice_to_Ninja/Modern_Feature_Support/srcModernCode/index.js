import { styleBody, addTitle, contact } from "./dom";
import nameitanythingyoulike, { getPremUsers } from "./data";

console.log("index file");

// (using a function from the dom.js file) initially this wont work when using modules as each file has its own unique scope
addTitle("test");
// we have to manually export functions that we want to use inside index from the dom.js file by putting an "export" keyword in from of the function you want to export and then "import { styleBody, addTitle } from "./dom";" in the index file
// or export everything at the bottom via a "default export" (one per file) and then "import nameitanythingyoulike from "./data";"
styleBody();
// any kind of data can be exported eg arrays, strings etc
console.log(contact);

console.log(nameitanythingyoulike);
const premUsers = getPremUsers(nameitanythingyoulike);
console.log(premUsers);
