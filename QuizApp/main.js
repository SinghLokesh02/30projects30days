// Array of 10 Object which have Questions and four Options 

var questions = [
    {
        question: "What is the full form of HTML?",
        option1: "Hyper Text Markup Language",
        option2: "Hyper Text Markup Language",
        option3: "Hyper Text Markup Language",
        option4: "Hyper Text Markup Language",
        answer: 1
    },
    {
        question: "What is the full form of CSS?",
        option1: "Cascading Style Sheet",
        option2: "Cascading Style Sheet",
        option3: "Cascading Style Sheet",
        option4: "Cascading Style Sheet",
        answer: 1
    },
    {
        question: "What is the full form of HTTP?",
        option1: "Hyper Text Transfer Protocol",
        option2: "Hyper Text Transfer Protocol",
        option3: "Hyper Text Transfer Protocol",
        option4: "Hyper Text Transfer Protocol",
        answer: 1
    },
    {
        question: "What is the full form of JS?",
        option1: "JavaScript",
        option2: "JavaScript",
        option3: "JavaScript",
        option4: "JavaScript",
        answer: 1
    },
    {
        question: "What is the full form of DOM?",
        option1: "Document Object Model",
        option2: "Document Object Model",
        option3: "Document Object Model",
        option4: "Document Object Model",
        answer: 1
    },
    {
        question: "What is the full form of API?",
        option1: "Application Programming Interface",
        option2: "Application Programming Interface",
        option3: "Application Programming Interface",
        option4: "Application Programming Interface",
        answer: 1
    },
    {
        question: "What is the full form of SQL?",
        option1: "Structured Query Language",
        option2: "Structured Query Language",
        option3: "Structured Query Language",
        option4: "Structured Query Language",
        answer: 1
    },
    {
        question: "What is the full form of PHP?",
        option1: "Hypertext Preprocessor",
        option2: "Hypertext Preprocessor",
        option3: "Hypertext Preprocessor",
        option4: "Hypertext Preprocessor",
        answer: 1
    },
    {
        question: "What is the full form of XML?",
        option1: "Extensible Markup Language",
        option2: "Extensible Markup Language",
        option3: "Extensible Markup Language",
        option4: "Extensible Markup Language",
        answer: 1
    },
    {
        question: "What is the full form of AJAX?",
        option1: "Asynchronous JavaScript and XML",
        option2: "Asynchronous JavaScript and XML",
        option3: "Asynchronous JavaScript and XML",
        option4: "Asynchronous JavaScript and XML",
        answer: 1
    }
]


let button = document.querySelector("button");
index = 0;
button.addEventListener("click",()=>{
    let options = Array.from(document.querySelectorAll("label"));
    let nextQuestion = questions[index];
    const data = Object.values(nextQuestion)
    for(let i = 0;i<options.length;i++){
        options[i].textContent = data[i];
    }
    if(index == questions.length-1){
        index = 0;
    }
    index++;  
})


 
