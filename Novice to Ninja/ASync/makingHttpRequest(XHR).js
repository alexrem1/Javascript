const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  //   console.log(request, request.readyState); // 0:unsent, 1:opened, 2:headers received, 3: loading, 4:done
  if (request.readyState === 4) {
    console.log(request.responseText); // contains the response data
  }
});

request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
request.send();
