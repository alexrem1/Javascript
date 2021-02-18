const name = "alex";

// functions defined on its own, not on a object or data type
const greet = () => "hello";

let resultOne = greet();
console.log(resultOne);

// methods is just a function which is associated with an object or data type like a string
// what distinguishes methods from a function is the way we invoke them and where they are defined eg invoked using dot notation (on the back of a variable)
let resultTwo = name.toUpperCase();
console.log(resultTwo);
