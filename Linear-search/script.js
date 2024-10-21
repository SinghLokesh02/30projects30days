let container = document.querySelector(".height-container");

let getRandomHeight = () => {
  return Math.floor(Math.random() * 100);
};

// Creating Random Heights
for (let start = 0; start < 10; start++) {
  let height = getRandomHeight();
  let box = document.createElement("div");
  box.style.height = `${height * 5}px `;
  box.classList.add("height");
  box.textContent = height;
  container.append(box);
  console.log(height);
}

// Start searching Items
let ans = document.querySelector(".ans");
let button = document.querySelector("input[type='submit']");
let heights = document.querySelectorAll(".height");
button.addEventListener("click", (e) => {
  let index = 0;
  let itemFound = false;
  let dataTosearch = document.querySelector("#inputElement").value;
  e.preventDefault();
  let interval = setInterval(() => {
    if (index < heights.length) {
      let element = heights[index];
      element.style.background = "black";
      console.log(element.textContent);
      
      heights.forEach((el) => {
        if (el != element) el.style.background = "red";
      });

      if (element.textContent == dataTosearch) {
        element.style.background = "lime";
        ans.textContent = "Element Found";
        ans.classList.add("lime");
        clearInterval(interval);
        itemFound = true;
      }
      index++;
    } else {
      if (!itemFound) {
        console.log("Element Not Found");
        ans.textContent = "Element Not Found";
        ans.classList.add("red");
      }
      clearInterval(interval);
    }
  }, 1000);
});
