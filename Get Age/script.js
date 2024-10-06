let button = document.querySelector("button");
let reset = document.querySelector(".reset");
let input = document.querySelector("input");
let container = document.querySelector(".container");

// reset
reset.addEventListener("click", () => {
  window.location.reload();
});

button.addEventListener("click", () => {
  // Getting the Values of Person DOB
  const [personYear, PersonMonth, personDate] = input.value.split("-");

  let personData = `${personDate} - ${PersonMonth} - ${personYear}`;
  console.log(personData);
  input.setAttribute("readonly", "true");

  // Getting Current Date
  const dateObj = new Date();
  let currentYear = dateObj.getFullYear();
  let currentMonth = dateObj.getMonth() + 1; // return month starting from 0
  let currentDate = dateObj.getDate() + 1;

  let today = `${currentDate} - ${currentMonth} - ${currentYear}`;
  console.log(today);

  // Calculation
  let date, month, year;

  // Days
  if (currentDate - personDate < 0) {
    currentDate += 30;
    currentMonth -= 1;
    date = currentDate - personDate;
  } else if (currentDate - personDate >= 0) {
    date = currentDate - personDate;
  }
  // Months
  if (currentMonth - PersonMonth < 0) {
    currentMonth += 12;
    currentYear -= 1;
    month = currentMonth - PersonMonth;
  } else if (currentMonth - PersonMonth >= 0) {
    month = currentMonth - PersonMonth;
  }
  // Year
  year = currentYear - personYear;

  let p = document.createElement("p");
  if (year >= 0 && date) {
    p.innerHTML = `You Age <span>${year}</span> years, <span>${month}</span> months and <span>${date}</span> day old.`;
    container.append(p);
  }

  console.log(`${date} - ${month} - ${year}`);
});
