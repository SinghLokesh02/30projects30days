let allInputs = document.querySelectorAll("input");
let arr = Array.from(allInputs);

let celciusToOtherTemperature = (celcius) => {
  celcius = Number(celcius);
  let kelvin = celcius + 273.15; // Celsius to Kelvin conversion formula
  let fahrenheit = celcius * (9 / 5) + 32; // Celsius to Fahrenheit conversion formula
  return [celcius, fahrenheit, kelvin];
};

let fahrenheitToOtherTemperature = (fahrenheit) => {
  fahrenheit = Number(fahrenheit);
  let celcius = ((fahrenheit - 32) * 5) / 9; // Fahrenheit to Celsius conversion formula
  let kelvin = celcius + 273.15; // Celsius to Kelvin conversion formula

  return [celcius, fahrenheit, kelvin];
};

let kelvinToOtherTemperature = (kelvin) => {
  kelvin = Number(kelvin);
  let celcius = kelvin - 273.15; // Kelvin to Celsius conversion formula
  let fahrenheit = (celcius * 9) / 5 + 32; // Celsius to Fahrenheit conversion formula

  return [celcius, fahrenheit, kelvin];
};

allInputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    let inputSelected = e.target.id;
    let temperature = e.target.value;
    let allTemperatures;
    // If the Input box Selected is Celcius
    if (inputSelected === "celcius") {
      allTemperatures = celciusToOtherTemperature(temperature);
    }

    // If the Input box Selected is Fahrenheit
    else if (inputSelected === "fahrenhiet") {
      allTemperatures = fahrenheitToOtherTemperature(temperature);
    }

    // If the Input box Selected is Kelvin
    else {
      allTemperatures = kelvinToOtherTemperature(temperature);
    }
    console.log(allTemperatures);

    allInputs.forEach((element, index) => {
      allInputs[index].value = allTemperatures[index].toFixed(2);
    });
  });
});
