document.addEventListener("DOMContentLoaded", () => {
  const cityName = document.getElementById("city-input");
  const weatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info"); //storing the whole "div" data in it , including the city name, temnp,description
  const cityNameDisplay = document.getElementById("city-name");
  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");
  const errorss = document.getElementById("error-message");

  const API_KEY = "d4bb6d153b74f5cd6c57fd8f51cd72b9";

  weatherBtn.addEventListener("click", async () => {
    const city = cityName.value.trim();
    if (!city) return;
    //the server may throw an error
    //the server/DB is always in another continent
    try {
      const weatherData = await fetchWeatherData(city);
      displayWeather(weatherData);
    } catch (error) {
      showError(error);
    }
  });

  //the server may throw an error
  //the server/DB is always in another continent

  async function fetchWeatherData(city) {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const response = await fetch(URL);
    console.log(typeof response);
    console.log("RESPONSE", response); //just to know what type of response it is generating and detailing

    if (!response.ok) {
      //you  didnt get the fetch result, this is for handling the API call, not a manual error
      throw new Error(`Response status : ${response.status}`);
    }
    const result = await response.json();
    return result;
  }

  function displayWeather(data) {
    console.log(data);
    const { name, main, weather } = data; //object destructing from the response overview from console
    
    cityNameDisplay.textContent = name;
    temperature.textContent = `the temperature is ${main.temp}`;
    description.textContent = `and we can see ${weather[0].description} around ${name}`;

    //remove the hidden
    weatherInfo.classList.remove("hidden");
    errorss.classList.add("hidden");
  }

  function showError(data) {
    weatherInfo.classList.add("hidden");
    errorss.classList.remove("hidden");
  }
});
