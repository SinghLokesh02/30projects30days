var img = document.querySelectorAll(".box");
console.log(img);

img.forEach((element) => {
  element.style.backgroundImage = "none";
});
let arr = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];


// Function to push in 2'd array
function push_in_array(arr,x) {
    let count = 0; 
    for(let i = 0;i<3;i++){
    for(let j = 0;j<3;j++){
      if(arr[i][j] == 0 && count == x){
        arr[i][j] = x;
        return;
      }
    }
    count++;
  }
}

function check(arr) {}
let count = 0;

img.forEach((e) => {
    let x = 0;
  e.addEventListener("click", () => {
    if (count % 2 == 0) {
      e.style.backgroundImage = "url('1.png')";
      s = e.id;
      x = parseInt(s[2]);
      console.log(x)
       
    }
     else {
      e.style.backgroundImage = "url('2.png')";
      e.style.backgroundImage.size = "cover";
      s = e.id;
      x = parseInt(s[2]);
      console.log(x)
     
    }
    count++;
    // For Turn
    let turn = document.getElementById("result");
    if (count < 9) {
      turn.innerHTML = (count % 2) + 1 + "<span>'s turn</span>";
    }
    // If The game is over
    if (count == 9) {
      turn.innerHTML = "Game Over";
    }
  });
  push_in_array(arr,x)
});

// For Reset Button
let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  location.reload();
});

 