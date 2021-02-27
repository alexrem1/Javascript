// DOM manipulation
const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");

const updateUI = (data) => {
  // const cityDetails = data.cityDetails;
  // const weather = data.weather;

  // descructure properties
  const { cityDetails, weather } = data; // from this data object I want these two properties and store them in a same name variable

  // update details template
  details.innerHTML = `
          <h5 class="my-3">${cityDetails.EnglishName}</h5>
          <div class="my-3">${weather.WeatherText}</div>
          <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span> <span>&deg;C</span>
          </div>`;
  // remove the d-none class if present
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

// calls getCity (city) then getWeather (locationID)
const updateCity = async (city) => {
  const cityDetails = await getCity(city); // await: getCity is a promise eg wait for it to finish before applying a value to cityDetails
  const weather = await getWeather(cityDetails.Key);

  return {
    cityDetails,
    weather,
    // cityDetails = cityDetails,
    // Weather = weather,
    // when the property name is the same as the value name forget about property value pair eg object shorthand notation, neater
  };
};

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  // update the UI with new city
  updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
});
