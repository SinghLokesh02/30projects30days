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

  let intervalIndex = 0;
  
  let heights = document.querySelectorAll(".height");
  let interval = setInterval(() => {
    if (intervalIndex < heights.length-1) {
      let element = heights[intervalIndex];
      element.style.background = "lime";
        for(let j = 0;j < heights.length-intervalIndex-1;j++){
          if(heights[j].textContent > heights[j+1].textContent){
            [heights[j].textContent, heights[j+1].textContent] = [heights[j+1].textContent, heights[j].textContent];
            heights[j].style.height = `${Number(heights[j].textContent) * 5}px`;
            heights[j+1].style.height = `${Number(heights[j+1].textContent) * 5}px`;
        }
    } 
  }
  else {
      clearInterval(interval);
      heights.forEach((element) => {
        element.style.background = "green";
      });
      alert("Array is sorted");
    }
  }, 1000);
});
