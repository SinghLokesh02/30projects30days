console.log("Hello");
let screen = document.getElementById("screen");
// console.log(screen);
let buttons = document.querySelectorAll("button");
// console.log(buttons);
let screenvalue = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    if (buttonText == "X") {
      buttonText = "*";
      screenvalue += buttonText;
    } else if (buttonText == "=") {
      screenvalue = eval(screenvalue);
    } else if (buttonText == "ac") {
      screenvalue = "";
    } else if (buttonText == "c") {
      screenvalue = screenvalue.slice(0, screenvalue.length - 1);
    } else {
      screenvalue += buttonText;
    }

    screen.value = screenvalue;
  });
}
