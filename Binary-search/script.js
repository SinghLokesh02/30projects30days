let container = document.querySelector(".height-container");

let getRandomHeight = () => {
  return Math.floor(Math.random() * 100);
};
// Create a random height
let sortedArr = [];
for (let start = 0; start < 10; start++) {
  let height = getRandomHeight();
  sortedArr.push(height);
}

// Sorting the array in ascending order
sortedArr.sort((a, b) => a - b);
console.log(sortedArr);

// Creating Heights from the sorted array
for (let start = 0; start < 10; start++) {
  let height = sortedArr[start];
  let box = document.createElement("div");
  box.style.height = `${height * 5}px `;
  box.classList.add("height");
  box.textContent = height;
  container.append(box);
}

// Start searching Items
let heights = document.querySelectorAll(".height");
let ans = document.querySelector(".ans");
let button = document.querySelector("input[type='submit']");
button.addEventListener("click", (e) => {
  let left = 0,right = sortedArr.length-1;
  let itemFound = false;
  let dataTosearch = document.querySelector("#inputElement").value;
  e.preventDefault();
  let interval = setInterval(() => {
    
    if (left <= right) {
      let mid = Math.floor((left + right) / 2);
      let element = heights[mid];
      element.style.background = "black";

      heights.forEach(el => {if (el != element) el.style.background = "red"});

        if (element.textContent == dataTosearch) {
          element.style.background = "lime";
          ans.textContent = "Element Found";
          ans.classList.add("lime");
          clearInterval(interval);
          itemFound = true;
        } else if (element.textContent > dataTosearch) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
    } 
    
    else {
      if (!itemFound) {
        ans.textContent = "Element Not Found";
        ans.classList.add("red");
      }
      clearInterval(interval);
    }
  }, 1000);

});
