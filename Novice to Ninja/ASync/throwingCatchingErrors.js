const getTodos = async () => {
  const response = await fetch("ASync/todos/luigi.json");

  if (response.status !== 200) {
    throw new Error("cannot fetch the data"); // throwing a new error inside a async function, the promise returned by this async function is rejected and therefore we're going to catch it down below. We get this error when there's a problem with the resource url
  }

  const data = await response.json();

  return data;
};

getTodos()
  .then((data) => console.log("resolved:", data))
  .catch((err) => console.log("rejected:", err.message));
