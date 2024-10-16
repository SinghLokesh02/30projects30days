let body = document.querySelector("body");
let iTag = document.querySelectorAll("i");

iTag.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.classList.contains("fa-plus")) {
      element.classList.remove("fa-plus");
      element.classList.add("fa-minus");
    } else {
      element.classList.remove("fa-minus");
      element.classList.add("fa-plus");
    }
    element.parentElement.nextElementSibling.classList.toggle("hide");
  });
});
