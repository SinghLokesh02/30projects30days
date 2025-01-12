let submit = document.querySelector(".get-btn");
let tBody = document.querySelector(".tbody");
let total = document.querySelector("#total");
let tFoot = document.querySelector("tfoot tr");
let totalCost = 0;

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.querySelector("#name");
  let cost = document.querySelector("#cost");
  if (name.value === "" || cost.value === "") {
    alert("Please fill in all fields");
    return;
  } else {
    tFoot.style.visibility = "visible";
    let row = document.createElement("tr");
    row.innerHTML = `
            <td>${name.value}</td>
            <td>${cost.value}</td>
            `;
    tBody.appendChild(row);
    totalCost += parseInt(cost.value);
    total.innerText = totalCost;
    name.value = "";
    cost.value = "";
  }
});
