// we want to get the json data sequentially

const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    // inside promise is where the network function is fired
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      //   console.log(request, request.readyState); // 0:unsent, 1:opened, 2:headers received, 3: loading, 4:done
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText); // pass in request.responseText to get an array of JS objects
        resolve(data);
      } else if (request.readyState === 4) {
        reject("error getting resource");
      }
    });

    //   request.open("GET", "https://jsonplaceholder.typicode.com/todos/"); // 404 error because it doesn't exist. Response status' - 100s: information, 200s: successful, 300s: redirection, 400: client error
    request.open("GET", resource);
    request.send();
  });
};

//no more callback hell
getTodos("ASync/todos/luigi.json")
  .then((data) => {
    console.log("promise 1 resolved:", data);
    return getTodos("ASync/todos/mario.json");
  })
  .then((data) => {
    console.log("promise 2 resolved:", data);
    return getTodos("ASync/todos/luigi.json");
  })
  .then((data) => {
    console.log("promise 3 resolved:", data);
  })
  .catch((err) => {
    console.log("promise rejected:", err);
  });
