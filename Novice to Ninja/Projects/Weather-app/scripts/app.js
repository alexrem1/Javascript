// DOM manipulation
const cityForm = document.querySelector("form");

// calls getCity (city) then getWeather (locationID)
const updateCity = async (city) => {
  const cityDetails = await getCity(city); // await: getCity is a promise eg wait for it to finish before applying a value to cityDetails
  const weather = await getWeather(cityDetails.Key);

  return {
    cityDetails: cityDetails,
    weather: weather,
  };
};

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  // update the UI with new city
  updateCity(city)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
