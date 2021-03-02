// these two different ways of creating functions, behave the same way.

greet();
greet();

// function expression has ; at the end and stores a function inside a variable
const speak = function () {
  console.log("good day!");
};

speak();

// function declaration has no ; at the end. Functions are hoisted to the top of a file before the rest of the JS runs. So in essence they're all declared before the rest of the JS and it does this with function declaration but not function expressions
function greet() {
  console.log("hello there");
}

// bottom line. Declare first to keep a logical flow of the code
