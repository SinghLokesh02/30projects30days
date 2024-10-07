let select = document.querySelector(".select");
let list = document.querySelector("ul");
let firstpara = document.querySelector("p");

select.addEventListener("click", () => {
  let arrow = document.querySelector("i");
  list.classList.toggle("hide");
  arrow.classList.toggle("rotate");
});

list.addEventListener("click", (e) => {
  let mediaSelected = e.target.textContent;
  firstpara.textContent = mediaSelected;
  select.click();
  click = true;
});
