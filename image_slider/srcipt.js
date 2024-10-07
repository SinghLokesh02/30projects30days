let a1 = "https://source.unsplash.com/random/900x400/?fruit";
let a = "https://source.unsplash.com/random/900x400/?coding";
let b = "https://source.unsplash.com/random/900x400/?water";
let c = "https://source.unsplash.com/random/900x400/?river";
let d = "https://source.unsplash.com/random/900x400/?sea";

let arr = [a1, a, b, c, d];

function prev() {
  var img = document.getElementById("slideImg");
  console.log(img);
  var imgSrc = img.src;
  var index = arr.indexOf(imgSrc);
  console.log(index);
  if (index == 0) {
    index = arr.length - 1;
    console.log(index);
  } else if (index > 0) {
    index--;
  }
  img.src = arr[index];
  console.log(arr[index]);

}

// Function for next image
function next() {
  var img = document.getElementById("slideImg");
  console.log(img);
  var imgSrc = img.src;
  var index = arr.indexOf(imgSrc);
  console.log(index);
  if (index == arr.length - 1) {
    index = 0;
    console.log(index);
  } else if (index < arr.length - 1) {
    index++;
  }
  img.src = arr[index];
  console.log(arr[index]);
}


 

