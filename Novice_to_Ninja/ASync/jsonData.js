const getTodos = (callback) => {
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
  request.open("GET", "Async/todos.json");
  request.send();
};

getTodos((err, data) => {
  console.log("callback fired");
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// So whenever we make a request to some kind of end point and its serving us back some Json data. Essentially what it is doing is on their server it's getting some Json from somewhere like We've got Json from here and it's just sending that json back to us to the browser, then we can parse it into some kind of real data that we can use inside the javascript and that is the crux of Json. It's a way of transferring data between server and client.
