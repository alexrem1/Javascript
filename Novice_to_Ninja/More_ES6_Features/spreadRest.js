// rest parameter - bundles up arguments inside a function into a single array parameter

const double = (...nums) => {
  console.log(nums);
  // do something
  return nums.map((num) => num * 2);
};

const result = double(1, 3, 5, 7, 9, 11, 13, 15); // different arguments
console.log(result);

// spread syntax (arrays) - spread out an array into its individual components.
const people = ["john", "wick", "louise"];
const members = ["donkey", "learner", ...people];
console.log(members);

// spread sytax (objects)

const person = { name: "shaun", age: 30, job: "net ninja" };
const personClone = { ...person, location: "manchester" };
console.log(personClone);
