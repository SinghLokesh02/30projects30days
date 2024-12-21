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
       <p><span class="bold">Capital</span> : ${element.capital ? element.capital[0] : "N/A"}</p>
      `;
    main.appendChild(div);
  });
}



// Remove Inspect
document.onkeydown = (e) => {
  if (e.key == 123) {
      e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == 'I') {
      e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == 'C') {
      e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == 'J') {
      e.preventDefault();
  }
  if (e.ctrlKey && e.key == 'U') {
      e.preventDefault();
  }
};