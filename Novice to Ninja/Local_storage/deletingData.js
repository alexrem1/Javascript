// store data in local store
// 2 arguments: name of the key and the value of that key
localStorage.setItem("name", "mario");
localStorage.setItem("age", 50);

// get data from local storage
let name = localStorage.getItem("name");
let age = localStorage.getItem("age");

console.log(name, age);

// updating data
localStorage.setItem("name", "luigi");
name = localStorage.getItem("name");

localStorage.age = 100;
age = localStorage.getItem("age");

console.log(name, age);

// deleting data from local storage
// localStorage.removeItem("name"); // remove single items
localStorage.clear(); // remove all
name = localStorage.getItem("name");
age = localStorage.getItem("age");

console.log(name, age);
