var get = document.getElementById("get");

var txt = get.innerText;

let s = "";
i = 0;
const typewriter = () => {
  s += txt[i];
  get.innerText = s;
  i++;
  if (i >= txt.length) {
    i = 0;
    s = "";
  }
  setTimeout(typewriter, 200);
};

typewriter();

// Js For Preloader of the Website
var preloader = document.getElementsByClassName("preloader")[0];
function myFunction() {
  preloader.style.display = "none";
}

setInterval(myFunction, 5000);
