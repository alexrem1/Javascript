import { styleBody, addTitle, contact } from "./dom";

console.log("index file");

// (using a function from the dom.js file) initially this wont work when using modules as each file has its own unique scope
addTitle("test");
// we have to manually export functions that we want to use inside index from the dom.js file by putting an "export" keyword in from of the function you want to export or export everything at the bottom and then "import { styleBody, addTitle } from "./dom";" in the index file
styleBody();
// any kind of data can be exported eg arrays, strings etc
console.log(contact);
