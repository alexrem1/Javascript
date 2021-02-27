// DOM manipulation
const cityForm = document.querySelector("form");

// calls getCity (city) then getWeather (locationID)
const updateCity = async (city) => {
  const cityDetails = await getCity(city); // await: getCity is a promise eg wait for it to finish before applying a value to cityDetails
  const weather = await getWeather(cityDetails.Key);

  return {
    cityDetails,
    weather, // when the property name is the same as the value name forget about property value pair eg object shorthand notation, neater
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
