let Userinput = document.querySelector("#UserInput");
let submit_btn = document.querySelector("#SubmitBtn");
let output = document.querySelector(".playGround");

// Input Validation
let Check_Validation = () => {
  output.innerHTML = "";
  let number = Userinput.value;
  if (number === "0" || number === "") {
    let p = document.createElement("p");
    p.innerText = "Enter Valid number of Paragraph";
    p.style.fontWeight = "bolder";
    p.style.background = "red";
    output.appendChild(p);
  } else if (number > 10 || number < 1 || number === "0" || number === "") {
    let p = document.createElement("p");
    p.style.background = "red";
    p.style.fontWeight = "bolder";
    p.innerText = "Enter Number between 1 - 10";
    output.appendChild(p);
  } else {
    let p = document.createElement("p");
    p.style.background = "lime";
    p.style.color = "white";
    p.style.fontWeight = "bolder";
    p.innerText = "OK";
    output.appendChild(p);
  }
  Userinput.value = "";
};

submit_btn.addEventListener("click", Check_Validation);
Userinput.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    Check_Validation();
  }
});
