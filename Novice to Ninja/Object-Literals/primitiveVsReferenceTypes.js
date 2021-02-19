// Primitive types are numbers strings booleans null undefined and symbols.
// Reference types are all types of objects: object literals, arrays, functions, dates, all other objects eg "Math"
// Difference: primitive types are stored on the stack which is a bit quicker and reference types are stored on the heap

// Importance
// Storing a primitive value in a variable adds that value to the stack and it locks the variable name to it as an accessor to that value, so it knows whenever we want to access the variable score for example to go out and grab this value for us.
// So when we store a reference type in a variable like an object(array etc) it adds the object to the heap and then adds a pointer to the object on the stack. So when we access this variable in the future it knows to get this pointer which points to this thing on the heap and it grabs that array for us.

// When we make copies of primitive values like strings and numbers and billions we make a new copy of the value on the stack.
// When we try to make a copy of a reference type. We only make a copy of the pointer on the stack which points to the same data on the heap. We don't make a copy of the actual data. So when we then change the copies it does have an effect on the original value and vice versa.

// Primitive values

let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`scoreOne: ${scoreOne} and`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne} and`, `scoreTwo: ${scoreTwo}`);

// Reference values

const userThree = { name: "alex", age: 30 };
const userFour = userThree;
console.log(userThree, userFour);

userThree.age = 40;
userFour.name = "Chun-Li";
console.log(userThree, userFour);
