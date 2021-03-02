//regular function expression
// const calcArea = function (radius) {
//   return 3.14 * radius ** 2;
// };

// ARROW function: don't use the function keyword, bit shorter
// when there's only one function parameter, parentheses can be taken away but MORE THAN 1 or NONE = parentheses
// when we have a single return on one line, return keyword can be removed and moved up to the same line above and take away the code block curly braces => returning that value
// BINDING of the "this" keyword (not covered yet)
const calcArea = (radius) => 3.14 * radius ** 2;
const area = calcArea(5);
console.log("area is:", area);

// PRACTICE ARROW FUNCTIONS

// const greet = function () {
//   return "hello world";
// };

const greet = () => "hello world";
const result = greet();
console.log(result);

// const bill = function (products, tax) {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };

// cannot be shortened to one line because of the extra logic
// function keyword has been removed and arrow has been added
const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};

console.log(bill([10, 15, 30], 0.2));
// OR
// const wowza = bill([10, 15, 30], 0.2);
// console.log(wowza);
