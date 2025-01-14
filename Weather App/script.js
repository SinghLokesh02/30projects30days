let input = document.querySelector("input");
// On Enter press key execute function getDetails
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    getDetails(e.target.value);
  }
  if (e.target.value === "") {
    getDetails("sikar");
  }
});

let cityName = document.querySelector(".city-name");
let temp = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let wind_speed = document.querySelector(".wind-speed");
let icon = document.querySelector("img");
let pressure = document.querySelector(".pressure");
let feels_like = document.querySelector(".feels-like");
let todayWeather = document.querySelector(".today-weather");
let date = document.querySelector(".date");
let todayDate = new Date().toDateString();
date.innerHTML = todayDate;

async function getDetails(value) {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=b87abf895c511c59dbf662c17d489357`;
  let data = await fetch(URL);
  let weatherData = await data.json();
  // Check if city is not found and return if true
  if (weatherData.cod === "404") {
    alert("City not found");
    return;
  } else {
    const { weather, main, name, wind } = weatherData;
    let API_icon = weather?.[0]?.icon;
    let API_temp = main?.temp;
    let API_cityName = name;
    let API_windSpeed = wind?.speed;
    let API_humidity = main?.humidity;
    let API_feels_like = main?.feels_like;
    let API_pressure = main?.pressure;

    icon.src = `http://openweathermap.org/img/wn/${API_icon}@4x.png`;
    cityName.innerHTML = API_cityName;
    temp.innerHTML = (API_temp - 273.15).toFixed(2);
    humidity.innerHTML = API_humidity;
    wind_speed.innerHTML = API_windSpeed;
    pressure.innerHTML = API_pressure;
    feels_like.innerHTML = API_feels_like;
    todayWeather.innerHTML = weather?.[0]?.main;
  }
}

getDetails("Delhi");
