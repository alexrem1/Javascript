// fetch API - fetch the data, take the response and return the response.json which returns a promise so we can tack on ".then" and inside we fire a function where we have access to that data and also catch an error at the end

fetch("ASync/todos/luigi.json")
  .then((response) => {
    console.log("resolved:", response);
    return response.json(); // returns a promise
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("rejected:", err);
  });
