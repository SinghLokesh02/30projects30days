let date = document.querySelector(".date")
let month = document.querySelector(".month")
let year = document.querySelector(".year")
let day = document.querySelector(".day")

// Date Object for date,month,year and day

let currentDate = new Date();

// Year
let currentYear = currentDate.getFullYear();
// Month
let monthArray = ["Januray", "Februar", "April", "May", "June", "July", "August", "September", "October", "November", "December "];
let currentMonth =  monthArray[currentDate.getMonth()-1];
// Date
let currentdate = currentDate.getDate();
// Day
let dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentDay = dayArray[currentDate.getDay()];

// Setting Date

date.innerHTML = currentdate;
month.innerHTML = currentMonth;
year.innerHTML = currentYear;
day.innerHTML = currentDay;

