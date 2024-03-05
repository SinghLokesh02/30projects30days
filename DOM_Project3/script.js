// Text Effect

let text = document.querySelector("h1");
let main = document.querySelector("#main");

let isRed = true; // Variable to track whether the text color is currently red or white

setInterval(() => {
  // Toggle between red and white text color and blue and green text shadow
  if (isRed) {
    main.style.background =
      "linear-gradient(45deg, lime, magenta, orange, purple)";
    text.style.color = "cyan";
    text.style.textShadow = "10px 10px 5px blue";
  } else {
    text.style.color = "white";
    text.style.textShadow = "10px 10px 5px green";
    main.style.background = "linear-gradient(45deg, red, yellow, green, blue)";
  }

  // Toggle the value of isRed for the next iteration
  isRed = !isRed;
}, 1000);

// Cursor Movement
let cursor = document.querySelector(".cursor");

main.addEventListener("mousemove", (e) => {
  cursor.style.left = e.x + "px";
  cursor.style.top = e.y + "px";
});

