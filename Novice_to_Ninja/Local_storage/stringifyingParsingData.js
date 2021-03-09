const todos = [
  { text: "play mariokart", author: "shaun" },
  { text: "buy some milk", author: "mario" },
  { text: "buy some bread", author: "luigi" },
];
console.log(JSON.stringify(todos));

localStorage.setItem("todos", JSON.stringify(todos)); // turns array of objects into valid json string, good format to store in local storage.

const stored = localStorage.getItem("todos");
console.log(JSON.parse(stored)); // data retrieved and json parsed into an array
