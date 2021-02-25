// weather API

const key = "zUAF1keJ41u6JqVWFI3l6h1V2JLAynrp";

const getCity = async (city) => {
  const baseURL =
    "http://dataservice.accuweather.com/locations/v1/cities/search";
  const queryTerm = `?apikey=${key}&q=${city}`;

  const response = await fetch(baseURL + queryTerm); //fetch returns a promise, its going to resolve that promise and pass the response to the constant "response"
  const data = await response.json(); // promise resolves and hands the resolved data to the data variable

  return data[0];
};

// const getCity is an async function which returns a promise allowing us to tack on a ".then"
getCity("manchester")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
