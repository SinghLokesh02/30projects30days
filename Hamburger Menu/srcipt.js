let get = document.getElementsByClassName("hamburg")[0];
var nav = document.getElementsByTagName("ul")[0];
var menu = document.querySelector("a");
console.log(menu);
console.log(nav.innerHTML);
var w = window.innerWidth;
console.log(w);

if (w <= 800) {
  nav.style.display = "none";
  get.addEventListener("click", () => {
    if (nav.style.display == "none") {
      nav.style.display = "block";
      menu.style.display = "block";
      // get.style.display = "none"
    } else {
      nav.style.display = "none";
      menu.style.display = "none";
      get.style.display = "block";
    }
  });
}
