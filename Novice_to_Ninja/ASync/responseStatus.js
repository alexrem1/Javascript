const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  //   console.log(request, request.readyState); // 0:unsent, 1:opened, 2:headers received, 3: loading, 4:done
  if (request.readyState === 4 && request.status === 200) {
    console.log(request, request.responseText); // contains the response data
  } else if (request.readyState === 4) {
    console.log("could not fetch the data");
  }
});

request.open("GET", "https://jsonplaceholder.typicode.com/todoss/"); // 404 error because it doesn't exist. Response status' - 100s: information, 200s: successful, 300s: redirection, 400: client error
request.send();
