// Genearate Random Color

// Method for Checking the string contains only empty string
let checkSpace = (s) => {
  let count = 0;
  for(let i = 0;i<s.length;i++){
    if(s[i] == ' ')count++;
  }
  return count == s.length?0:1;
};

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

let addTask = () => {
  if (checkSpace(input.value)) {
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
  } else {
    alert("First Add some Task ");
  }

  count++;
};

// Event listener for button click
addTaskBtn.addEventListener("click", addTask);

// Event listener for Enter key press
input.addEventListener("keypress", function (event) {
  // Check if the pressed key is Enter (key code 13)

  if (event.key === "Enter") {
    addTask();
  }
});
