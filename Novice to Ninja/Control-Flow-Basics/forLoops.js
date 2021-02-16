// The job of a loop is to lopp through a portion of code over and over and over a set number of times
// Cycling through an array or some data is an iteration and each iteration is one cycle through. Everytime we perform a code block, that is one iteration through the code block

// let i = 0: initialization variable
// i < 5: a condition, it'll evaluate to true eg execute or false eg dont excute
// final expression: execute everytime at the end of the code block
// {} code block: it's just a section of code that we're sectioning ogg and its for this loop
for (let i = 0; i < 5; i++) {
  console.log("in loop:", i);
}
console.log("loop finished");

const names = ["alex", "mario", "luigi", "john", "wick", "donkey"];

for (let i = 0; i < names.length; i++) {
  //   console.log(names[i]); // we can cycle through an array of any length
  let html = `<div>${names[i]}</div>`; //outputed to the browser
  console.log(html);
}
