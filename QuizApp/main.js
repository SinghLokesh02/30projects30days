// Array of 10 Object which have Questions and four Options

var questions = [
  {
    question: "What is the full form of HTML?",
    option1: "Hyper Text Markup Language",
    option2: "Hypertext Transfer Protocol",
    option3: "Hypertext Markup Language",
    option4: "Hyperlink Markup Language",
    answer: 1,
  },
  {
    question: "What is the full form of CSS?",
    option1: "Creative Style Sheet",
    option2: "Cascading Sheet Styles",
    option3: "Cascading Style Sheet",
    option4: "Central Style Sheet",
    answer: 3,
  },
  {
    question: "What is the full form of HTTP?",
    option1: "Hyper Text Transfer Protocol",
    option2: "Hyper Text Transport Protocol",
    option3: "Hyper Text Transfer Process",
    option4: "Hyper Transfer Protocol",
    answer: 1,
  },
  {
    question: "What is the full form of JS?",
    option1: "JavaSource",
    option2: "JavaScript",
    option3: "JustScript",
    option4: "JavaServer",
    answer: 2,
  },
  {
    question: "What is the full form of DOM?",
    option1: "Data Object Model",
    option2: "Document Object Model",
    option3: "Direct Object Module",
    option4: "Document Object Machine",
    answer: 2,
  },
  {
    question: "What is the full form of API?",
    option1: "Application Programming Input",
    option2: "Application Processing Interface",
    option3: "Application Programming Interface",
    option4: "Algorithmic Processing Interface",
    answer: 3,
  },
  {
    question: "What is the full form of SQL?",
    option1: "Structured Query Language",
    option2: "Simple Query Language",
    option3: "System Query Language",
    option4: "Sequential Query Language",
    answer: 1,
  },
  {
    question: "What is the full form of PHP?",
    option1: "Personal Home Page",
    option2: "Private Home Page",
    option3: "PHP: Hypertext Preprocessor",
    option4: "Primary Hypertext Protocol",
    answer: 3,
  },
  {
    question: "What is the full form of XML?",
    option1: "Extensible Markup Language",
    option2: "eXtensible Modular Language",
    option3: "Extra Meta Language",
    option4: "eXternal Markup Language",
    answer: 1,
  },
  {
    question: "What is the full form of AJAX?",
    option1: "Asynchronous JavaScript and XML",
    option2: "Active JavaScript and XML",
    option3: "Asynchronous JSON and XML",
    option4: "Advanced JavaScript XML",
    answer: 1,
  },
];

// Onlcick Show the Container and Change the text
let button = document.querySelector("button");
let mainContainer = document.querySelector(".main-container");
let options = document.querySelectorAll("label");
let inputs = document.querySelectorAll("input");
let index = 0;
let correctAns = 0;
let totalQuestions = questions.length;

function loadQuestion(index) {
  let nextQuestion = questions[index];
  const data = Object.values(nextQuestion);
  for (let i = 0; i < options.length; i++) {
    options[i].textContent = data[i]; // set the options text
  }
}

// Event listener for next question button
button.addEventListener("click", () => {
  if (index < totalQuestions) {
    // Check the selected answer
    let selectedInput = Array.from(inputs).find(
      (input) => input.checked === true
    );
    let ansIndex = selectedInput.id.slice(4);

    // Show the selected option as correct or wrong

    if (ansIndex == questions[index].answer) {
      correctAns++;
    }
    console.log(correctAns);

    // Load the next question if available
    index++;
    if (index < totalQuestions) {
      loadQuestion(index);
    } else {
      // Quiz completed, show the results
      mainContainer.innerHTML = `<h2>Quiz Completed</h2>
       <p class= 'correct'>Correct Answers: ${correctAns}</p>
       <p>Incorrect Answers: ${totalQuestions - correctAns}</p>`;
      nextQuestionButton.style.display = "none"; // Hide the button after the quiz ends
    }

    // Uncheck all inputs
    inputs.forEach((element) => (element.checked = false));
  }
});

// Load the first question

loadQuestion(index);
