let get = document.querySelector("p");

let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      get.innerHTML = data.value;
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
