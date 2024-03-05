// Get all the box

let box = document.querySelectorAll(".box");
let body = document.querySelector("body");
console.log(box);

box.forEach((element) => {
  element.addEventListener("click", () => {
    let Element_class = element.classList[1];
    console.log(Element_class);
    body.style.background = Element_class;
  });
});
