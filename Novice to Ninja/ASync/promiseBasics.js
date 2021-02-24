// get multiple jsons in turn eg request the first API and wait until data is back before we start to get the second one
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

getTodos("ASync/todos/luigi.json")
  .then((data) => {
    console.log("promise resolved:", data);
  })
  .catch((err) => {
    console.log("promise rejected:", err);
  });

// promise example (takes some time to do and either resolved or rejected)
// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     // fetch something eg network request data
//     resolve("some data"); // normally just "data" i
//     // reject(" some error "); // normally just "err"
//   });
// };

// when we get a promise back from a function like this then we can tack on a ".then" method. Promise is basically saying, if you pass a function in here that I will fire that function when we resolve the promise eg data
// getSomething().then(
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

//same as above
// getSomething()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
