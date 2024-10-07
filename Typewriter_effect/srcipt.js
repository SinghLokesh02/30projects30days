var get = document.getElementById("get");

var txt = get.innerText;

let s = "";

i = 0;
const typewriter = () => {
  s += txt.charAt(i) + "|";
  get.innerText = s;
  s = s.slice(0, -1);
  i++;
  if (i >= txt.length) {
    i = 0;
    s = "";
  }
  setTimeout(typewriter, 100);
};

typewriter();
