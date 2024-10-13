// Javasrcipt

// Select Tags
let get_input = document.querySelector("#guessField");
let Guess_left = document.querySelector(".Guess_remain");
let lowandHigh = document.querySelector(".lowOrHi");
let result = document.querySelector(".lastResult");
let submit = document.querySelector(".guessSubmit");
let reset = document.querySelector(".reset");
let span = document.querySelector("span");

// Styling of Span

let continuous = setInterval(() => {
  span.classList.toggle("none");
}, 1000);

// Function to check the input value is empty or Not
function checkEmpty(str) {
  if (typeof parseInt(str) != "number") return false;
  let count = 0;
  for (data of str) {
    if (data == " ") {
      count++;
    } else if ((data >= "a" && data <= "z") || (data >= "A" && data <= "Z"))
      return false;
  }
  if (count > 1) return 0;
  return count == str.length ? 0 : 1;
}

// Function to Generatr Random Number
function GenerateRandomNumber() {
  return Math.floor(Math.random() * 100);
}

let rand = GenerateRandomNumber();
let check = 0;

// Total count Initially is 10
let total_count = 10;
submit.addEventListener("click", () => {
  console.log(total_count);
  let input_data = get_input.value;
  if (checkEmpty(input_data)) {
    console.log(rand);
    input_data = parseInt(get_input.value);
    if (input_data < rand) {
      lowandHigh.innerText = "Your Guess is Low";
    } else if (input_data > rand) {
      lowandHigh.innerText = "Your Guess is High";
    } else if (input_data == rand) {
      lowandHigh.innerText = "You Guessed It right ✅✅";
      result.innerText = "You Win the Game";
      get_input.readOnly = true;
      check = 1;
      clearInterval(continuous);
    }
    get_input.value = "";
    Guess_left.innerText = total_count - 1;
    total_count--;
  } else {
    alert("Please Enter Correct Value");
  }

  if (total_count == 0) {
    result.innerText = "You Lose the Game ❌❌";
    result.style.color = "red";
    get_input.readOnly = true;
    clearInterval(continuous);
  }

  //   Check the Inputtted Value is High or Low
});

reset.addEventListener("click", () => {
  window.location.reload();
});
