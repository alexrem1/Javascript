// assets are a new data structure in the object category which means there are reference type and they allow us to store a list of any kind of unique values. And by that I mean that in any given set a certain value can only be present once. So these are a bit like an array but they don't allow duplicates whereas an array would allow duplicate values inside it.

const namesArray = ["ryu", "chun-li", "ryu", "donkey", "sherman"];
console.log(namesArray);

// const nameSet = new Set([
//   "ryu",
//   "chun-li",
//   "ryu",
//   "donkey",
//   "donkey",
//   "sherman",
// ]);
// const nameSet = new Set(namesArray);
// console.log(nameSet);

// const uniqueNames = [...nameSet];
const uniqueNames = [...new Set(namesArray)];
console.log(uniqueNames);

// sets have their own unique set of methods and properties
const ages = new Set();
ages.add(20);
ages.add(25).add(40);
ages.add(25).add(20).add(30);
ages.delete(20);
ages.delete(25);
console.log(ages, ages.size);
console.log(ages.has(30), ages.has(25));

ages.clear();
console.log(ages);

// forEach
const ninjas = new Set([
  { name: "goofy", age: 45 },
  { name: "donkey", age: 35 },
  { name: "luigi", age: 30 },
]);

ninjas.forEach((ninja) => {
  console.log(ninja.name, ninja.age);
});
