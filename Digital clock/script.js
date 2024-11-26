let hour = document.getElementById("hours");
let minute = document.getElementById("minutes");
let second = document.getElementById("seconds");
let ampm = document.getElementById("ampm");

let setData = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let meridian;

  if (hours > 12) {
    hours -= 12;
    meridian = "PM";
  } else {
    meridian = "AM";
  }
  hour.innerText = hours;
  minute.innerText = minutes;
  second.innerText = seconds;
  ampm.innerText = meridian;

  hour.innerText = hour.innerText.padStart(2, 0);
  minute.innerText = minute.innerText.padStart(2, 0);
  second.innerText = second.innerText.padStart(2, 0);

  setInterval(setData, 1000);
};

setData();
