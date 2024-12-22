let container = document.querySelector(".height-container");

let getRandomHeight = () => {
  return Math.floor(Math.random() * 100);
};

// Function to show Data

let showData = (arr) => {
  container.innerHTML = "";
  arr.forEach((element) => {
    let box = document.createElement("div");
    box.style.height = `${element * 5}px `;
    box.classList.add("height");
    box.textContent = element;
    container.append(box);
  });
};

// Creating Random Heights
let arr = [];
for (let start = 0; start < 10; start++) {
  let height = getRandomHeight();
  arr.push(height);
}
showData(arr);

// Start searching Items
let button = document.querySelector("input[type='submit']");
button.addEventListener("click", (e) => {
  e.preventDefault();

  let intervalIndex = 1;
  let heights = document.querySelectorAll(".height");

  let interval = setInterval(() => {
    if (intervalIndex < heights.length) {
      let element = heights[intervalIndex];
      element.style.background = "lime";

      heights.forEach((data) => {
        if (data != element) data.style.background = "red";
      });

      let key = Number(heights[intervalIndex].textContent);
      j = intervalIndex - 1;

      while (j >= 0 && Number(heights[j].textContent) > key) {
        heights[j + 1].style.background = "black";
        heights[j + 1].textContent = Number(heights[j].textContent);
        heights[j + 1].style.height = `${Number(heights[j].textContent) * 5}px`;
        j--;
      }
      heights[j + 1].textContent = key;
      heights[j + 1].style.height = `${key * 5}px`;
      intervalIndex++;
    } else {
      clearInterval(interval);
      heights.forEach((element) => {
        element.style.background = "green";
      });
      alert("Array is sorted");
    }
  }, 3000);
});
