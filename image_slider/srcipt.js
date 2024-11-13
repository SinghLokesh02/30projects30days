let arr = [
  "./img/img-1.jpeg",
  "./img/img-2.jpeg",
  "./img/img-3.jpeg",
  "./img/img-4.jpeg",
  "./img/img-5.jpeg",
];
let index = 0;
function prev() {
  var img = document.getElementById("slideImg");
  console.log(img);
  var imgSrc = img.src;
  let indexLocal = imgSrc.lastIndexOf("img");
  let imageFilePath = `./img/${imgSrc.substring(indexLocal, indexLocal + 5)}.jpeg`;
  index = arr.indexOf(imageFilePath);
  if (index <= 0) {
    index = arr.length - 1;
  } else {
    index--;
  }
  console.log(index);
  
  img.src = arr[index];
}

// Function for next image
function next() {
  var img = document.getElementById("slideImg");
  console.log(img);
  var imgSrc = img.src;
  let indexLocal = imgSrc.lastIndexOf("img");
  let imageFilePath = `./img/${imgSrc.substring(indexLocal, indexLocal + 5)}.jpeg`;
  index = arr.indexOf(imageFilePath);
  if (index >= 4) {
    index = 0;
  } else {
    index++;
  }
  img.src = arr[index];
  
}
