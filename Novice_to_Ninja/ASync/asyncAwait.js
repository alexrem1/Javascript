// using async and await, what we can do is section off all of our async code into a single async function and then use the await keyword inside to chain promises together in a much more readable and logical way

// do this fetch and this returns a promise and this await keyword stalls JS from assigning a value to the "response" variable until the promise has resolved. Once the promise has resolved, we can take the value from the resolve function (response) and assign it to the "response" variable
// anything with async in front of it returns a promise
const getTodos = async () => {
  const response = await fetch("ASync/todos/luigi.json");
  const data = await response.json();
  return data;
};

console.log(1);
console.log(2);
// when this promise has resolved ".then" we will do something
getTodos().then((data) => console.log("resolved:", data)); //getTodos function is non-blocking
console.log(3);
console.log(4);

// fetch("ASync/todos/luigi.json")
//   .then((response) => {
//     console.log("resolved:", response);
//     return response.json(); // returns a promise
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("rejected:", err);
//   });
