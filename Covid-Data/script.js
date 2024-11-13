let button = document.querySelector("button");
let state = document.querySelector(".state");
let total = document.querySelector(".Total");
let cases = document.querySelector(".Cases");
let death = document.querySelector(".Deaths");
let input = document.querySelector("input");

let API = " https://api.rootnet.in/covid19-in/stats/latest";
fetch(API)
  .then((Response) => Response.json())
  .then((data) => {
    let t = data.data.summary.total;
    let c = data.data.summary.confirmedCasesIndian;
    let d = data.data.summary.deaths;
    let raj = input.value;
    total.textContent = t;
    cases.textContent = c;
    death.textContent = d;

    // Code When button is Clicked
    button.addEventListener("click", () => {
      let allStatesData = data.data.regional;

      const filteredData = allStatesData.filter(
        (element) => element.loc.toLowerCase() == input.value
      );

      if (filteredData.length > 0) {
        state.innerText = input.value.toUpperCase();
        let t = filteredData[0].totalConfirmed;
        let c = filteredData[0].confirmedCasesIndian;
        let d = filteredData[0].deaths;
        total.textContent = t;
        cases.textContent = c;
        death.textContent = d;
      } else {
        let div = document.createElement("div");
        div.textContent = "❌ No data found for the entered state.";
        div.classList.add("no-data");
        state.appendChild(div);
        setTimeout(() => {
          state.removeChild(div);
        }, 2000);
      }
    });
  });
