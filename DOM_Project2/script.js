const get_card = document.querySelector(".card");
var heart = document.querySelector("i");

let show_heart = get_card.addEventListener("dblclick", () => {
  heart.style.transform = "translate(-50%,50%) scale(1)";
  heart.style.color = "red";
  setTimeout(() => {
    heart.style.transform = "translate(-50%,50%) scale(0)";
    heart.style.color = "fff";
  }, 1100);
});
