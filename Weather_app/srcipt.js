//  Api -> 4749b6c36d5d72b64fddf269713c4033
// https://api.openweathermap.org/data/2.5/weather?q=pune&appid=4749b6c36d5d72b64fddf269713c4033

let tempCelcius = function(value){
let c = value - 273.15;
c = c.toFixed(2);
return c;
}

let get = document.getElementById("get");
let cityname = document.querySelector("input");
console.log(cityname.value);
get.style.display = "none";

let btn = document.getElementById("btn");
let city = document.querySelector("#city");
let Country = document.querySelector("#country");
let Temp = document.querySelector("#temp");
let minTemp = document.querySelector("#mintemp");
let maxTemp = document.querySelector("#maxtemp");
let Weather = document.querySelector("#weather");
let Wind = document.querySelector("#wind");
let Humidity = document.querySelector("#humidity");
let Pressure = document.querySelector("#pressure");

btn.addEventListener("click",()=>{
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname.value}&appid=4749b6c36d5d72b64fddf269713c4033`)
.then((apidata)=>{
    return apidata.json();
}
).then((actualdata)=>{
    console.log(actualdata);
    const name = actualdata.name;
    let temp = actualdata.main.temp;
    temp = tempCelcius(temp);
    let tempmin = actualdata.main.temp_min;
    tempmin = tempCelcius(tempmin);
    let tempmax = actualdata.main.temp_max;
    tempmax = tempCelcius(tempmax);
    const pressure = actualdata.main.pressure;
    const humidity = actualdata.main.humidity;
    const visibility = actualdata.visibility;
    const wind = actualdata.wind.speed;
    const country = actualdata.sys.country;
    const weather = actualdata.weather[0].main;
    // console.log(name,temp,tempmin,tempmax,pressure,humidity,visibility,wind,country,weather);

    city.innerHTML = name;
    Country.innerHTML = country;
    Temp.innerHTML = temp;
    Weather.innerHTML = weather;
    minTemp.innerHTML = tempmin;
    maxTemp.innerHTML = tempmax;
    Wind.innerHTML = wind;
    Humidity.innerHTML = humidity;
    Pressure.innerHTML = pressure;
    
    get.style.display = "block";
   
})

});