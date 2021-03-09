const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    //   console.log(request, request.readyState); // 0:unsent, 1:opened, 2:headers received, 3: loading, 4:done
    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      callback("could not fetch data", undefined);
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todos/"); // 404 error because it doesn't exist. Response status' - 100s: information, 200s: successful, 300s: redirection, 400: client error
  request.send();
};

console.log(1);
console.log(2);

getTodos((err, data) => {
  console.log("callback fired");
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log(3);
console.log(4);
