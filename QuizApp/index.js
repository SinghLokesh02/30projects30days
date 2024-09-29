let rectangle = document.querySelector("#rect");

rectangle.addEventListener("mousemove", (e) => {
  // Get Height and width of Rectangle
  let width = rectangle.offsetWidth;
  let height = rectangle.offsetHeight;

  if (e.x < "400") {
    let opacity = e.x / 50;
    opacity /= 10;
    opacity = 1.3 - opacity;
    rectangle.style.backgroundColor = `rgb(255, 0, 0, ${opacity})`;
    console.log(opacity);
  } else if (e.x > "400") {
    let opacity = e.x / 50;
    opacity /= 10;
    opacity -= 0.1;
    rectangle.style.backgroundColor = `rgba(24, 24, 186, ${opacity})`;
    console.log(opacity);
  }
});
