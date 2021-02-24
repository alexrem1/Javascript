// get multiple jsons in turn eg request the first API and wait until data is back before we start to get the second one
const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    //   console.log(request, request.readyState); // 0:unsent, 1:opened, 2:headers received, 3: loading, 4:done
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText); // pass in request.responseText to get an array of JS objects
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("could not fetch data", undefined);
    }
  });

  //   request.open("GET", "https://jsonplaceholder.typicode.com/todos/"); // 404 error because it doesn't exist. Response status' - 100s: information, 200s: successful, 300s: redirection, 400: client error
  request.open("GET", resource);
  request.send();
};

// below is callback hell, nesting callback within callback within callback - hard to maintain and read
getTodos("Async/todos/luigi.json", (err, data) => {
  console.log("callback fired");
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
  getTodos("Async/todos/mario.json", (err, data) => {
    console.log("callback fired");
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
  getTodos("Async/todos/todos.json", (err, data) => {
    console.log("callback fired");
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
});
