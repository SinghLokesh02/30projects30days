const box = document.querySelectorAll(".box");

box.forEach((element) => {
  let img = element.querySelector("img");
  element.addEventListener("mousemove", (e) => {
    img.style.transform = "scale(1.3)";
    img.style.left = e.x + "px";
  });
  element.addEventListener("mouseout", (e) => {
    img.style.transform = "scale(0)";
    img.style.left = 0;
  });
});
