// So all we've done again is taken all of those separate functions. Anything to do with updating the city or the weather. And we've bundled those together as asynchronous methods inside a forecast class. And we also have a constructor to set the properties on that class then we create a new instance of that class with those properties and those methods attached to it. And down here we're just changing the call to update City, which was originally a function in this file, to forecast which is the forecast class instance ".updateCity" and then passing in the city. And that is sparking the chain of different methods.

class Forecast {
  constructor() {
    this.key = "zUAF1keJ41u6JqVWFI3l6h1V2JLAynrp";
    this.weatherURI =
      "http://dataservice.accuweather.com/currentconditions/v1/";
    this.cityURI =
      "http://dataservice.accuweather.com/locations/v1/cities/search";
  }
  // "async" infront of the method name when dealing with a class
  // calls getCity (city) then getWeather (locationID)
  async updateCity(city) {
    const cityDetails = await this.getCity(city); // await: getCity is a promise eg wait for it to finish before applying a value to cityDetails
    const weather = await this.getWeather(cityDetails.Key);

    return {
      cityDetails,
      weather,
      // cityDetails = cityDetails,
      // Weather = weather,
      // when the property name is the same as the value name forget about property value pair eg object shorthand notation, neater
    };
  }
  async getCity(city) {
    const queryTerm = `?apikey=${this.key}&q=${city}`;
    const response = await fetch(this.cityURI + queryTerm); //fetch returns a promise, its going to resolve that promise and pass the response to the constant "response"
    const data = await response.json(); // promise resolves and hands the resolved data to the data variable

    return data[0];
  }
  async getWeather(locationID) {
    const queryTerm = `${locationID}?apikey=${this.key}`;

    const response = await fetch(this.weatherURI + queryTerm);
    const data = await response.json();
    return data[0];
  }
}
