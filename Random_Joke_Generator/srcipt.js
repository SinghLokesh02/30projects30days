let get = document.querySelector("p.content");
let button = document.querySelector("button");

button.addEventListener("click",()=>{
  button.textContent ="अगले जोक के लिए बटन दबाये"
});

button.addEventListener("click", function () {
  fetch(
    "https://hindi-jokes-api.onrender.com/jokes?api_key=55a0f8dd6ea42a06fd49e909c6f3"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      get.innerHTML = data.jokeContent;
    })
    .catch((err) => {
      console.log(err);
    });
});
