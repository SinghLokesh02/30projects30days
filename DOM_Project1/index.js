const btn = document.querySelector("button");
const head = document.querySelector("h4");
let count = 0;
btn.addEventListener("click", () => {
  if (count == 0) {
    head.innerText = "Friends";
    head.style.color = "Green";
    btn.style.backgroundColor = "red";
    btn.innerText = "Remove Friend";
    count = 1;
  } else {
    head.innerText = "Stranger";
    head.style.color = "Red";
    btn.style.backgroundColor = "lime";
    btn.innerText = "Add Friend";
    count = 0;
  }
});
