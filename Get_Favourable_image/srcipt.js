let btn = document.querySelector("#btn");
let img = document.querySelector("img");
btn.addEventListener("click", function () {
  let random = document.querySelector("#getimage").value;
  console.log(random);
  fetch(`https://source.unsplash.com/random/?${random}`)
    .then(function (response) {
      return response.blob();
    })
    .then(function (blob) {
      let objectURL = URL.createObjectURL(blob);
      img.src = objectURL;
    });
});

console.log("This is script file");

let x = 5;
console.log(`This is ${x}`);
