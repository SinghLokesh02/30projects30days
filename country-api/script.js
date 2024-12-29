let main = document.querySelector("main");
let input = document.querySelector("input");
let select = document.querySelector("select");
let darkModeToggle = document.getElementById("dark-mode-toggle");
let body = document.body;

// Dark Mode Toggle
darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  // Update icon and text
  let icon = darkModeToggle.querySelector("i");
  let text = darkModeToggle.querySelector("p");

  if (body.classList.contains("dark")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    text.textContent = "Light Mode";
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    text.textContent = "Dark Mode";
  }
});

fetch("https://restcountries.com/v3.1/all")
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    showData(json);

    // Search by country name
    input.addEventListener("input", () => {
      let filteredArray = json.filter((element) =>
        element.name.common.toLowerCase().includes(input.value.toLowerCase())
      );
      showData(filteredArray);
    });

    // Search by region
    select.addEventListener("change", () => {
      let region = select.value.toLowerCase();
      if (region === "") {
        showData(json);
      } else {
        let filteredArray = json.filter(
          (element) => element.region.toLowerCase() === region
        );
        showData(filteredArray);
      }
    });
  })
  .catch((error) => {
    console.log(error);
  });

// Function to show data
function showData(data) {
  main.innerHTML = "";
  data.forEach((element) => {
    let div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
       <img src=${element.flags.svg} alt="Flag of ${element.name.common}">
       <h2>${element.name.common}</h2>
       <p> <span class="bold">Population</span> : ${element.population.toLocaleString()}</p>
       <p><span class="bold">Region</span> : ${element.region}</p>
       <p><span class="bold">Capital</span> : ${
         element.capital ? element.capital[0] : "N/A"
       }</p>
      `;
    main.appendChild(div);
    div.addEventListener("click", () => {
      showDetails(element);
    });
  });
}

// Code for click on Individual Cards

function showDetails(country) {
  document.querySelector(".search").style.display = "none";
  main.classList.remove("main");
  main.innerHTML = `
      <button class="back-btn">Back</button>
      <div class="box-new">
        <div class="img-box"><img src=${country.flags.svg} alt="Flag of ${
    country.name.common
  }"></div>
        <div class="box-text" id="boxtext">
          <h2 class="heading">${country.name.common}</h2>
          <p><span class="bold">Native Name</span>: ${country.name.official}</p>
          <p><span class="bold">Population</span>: ${country.population}</p>
          <p><span class="bold">Region</span>: ${country.region}</p>
          <p><span class="bold">Sub Region</span>: ${country.subregion}</p>
          <p><span class="bold">Capital</span>: ${country.capital}</p>
          <p><span class="bold">Languages</span>: ${Object.values(
            country.languages || {}
          ).join(", ")}</p>
          <p><span class="bold">Currencies</span>: ${Object.values(
            country.currencies || {}
          )
            .map((currency) => currency.name)
            .join(", ")}</p>
          <p><span class="bold">Top Level DoallBox</span>: ${country.tld.join(
            ", "
          )}</p>
        </div>
      </div>
    `;

  let button = document.querySelector("button");
  button.addEventListener("click", () => {
    window.location.href = "./index.html";
  });
}
