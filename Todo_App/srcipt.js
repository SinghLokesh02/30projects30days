// Genearate Random Color

let GetRandomColor = () => {
  let colors = [
    "gray",
    "orange",
    "magenta",
    "cyan",
    "lime",
    "blue",
    "black",
    "pink",
    "coral",
    "green",
    "slateblue",
  ];
  let random = Math.floor(Math.random() * 11);
  return colors[random];
};

var addTaskBtn = document.getElementById("add");
var ToAdd = document.getElementsByTagName("ul")[0];
const get_div = document.getElementsByClassName("todo")[0];
let input = document.getElementsByTagName("input")[0];
let count = 1,
  this_order = 100;
addTaskBtn.addEventListener("click", function () {
  if (input.value.length > 0) {
    let taskText = input.value.trim();
    let taskItem = document.createElement("div");
    taskItem.classList.add(`Item`);

    let bgc = GetRandomColor();
    taskItem.style.background = bgc;

    taskItem.innerHTML = `
        <div class="inner">
        <input type="checkbox" name="check" class = "check">
        <span class="task">${taskText}</span>
        </div>
        <i class="fa-solid fa-xmark custom-icon"></i>
        `;
    // Add event listener to the 'x' mark (i logo) to remove the task item
    let xMark = taskItem.querySelector(".custom-icon");
    xMark.addEventListener("click", function () {
      taskItem.remove();
    });

    // Add Event Listner for The crossed Item(Line Through)
    let Tickbtn = taskItem.querySelector(".check");
    let Item = document.querySelector(".Item");
    Tickbtn.addEventListener("click", () => {
      Tickbtn.nextElementSibling.classList.toggle("crossed");
      Item.style.order = `${this_order}`;
      this_order++;
    });

    get_div.appendChild(taskItem);
    input.value = "";
  }

  count++;
});

// Get the task Crossed when click on the input type checkbox
