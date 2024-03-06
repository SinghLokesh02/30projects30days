// Select the Required element

let input = document.querySelector("#number-of-para");
let btn = document.querySelector("#submit");
let output = document.querySelector(".show-data");

// Array of 20 different different paragraphs
let para = [
  "Korea is a region in East Asia. Since 1948, it has been divided between two distinct sovereign states: North Korea and South Korea. Korea consists of the Korean Peninsula, Jeju Island, and several minor islands near the peninsula.",

  "Mummy is the most valuable person in the world. She is the one who gave us life and made us stand on our feet. She is the one who loves us unconditionally and makes us feel special.",

  "Ram is a Guy from India, He is Currently Studying in 2nd year of B.Tech. He is a Web Developer and a Competitive Programmer. He is also a Content Writer and a Graphic Designer",

  "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",

  "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers write once, run anywhere (WORA)",

  "PHP is a popular general-purpose scripting language that is especially suited to web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994. The PHP reference implementation is now produced by The PHP Group.",

  "The famous five lakes in USA are Lake Superior, Lake Michigan, Lake Huron, Lake Erie, and Lake Ontario. These lakes are located in the northern part of America and are the largest group of freshwater lakes in the world.",

  "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",

  "Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser",

  "HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.",

  "CSS is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",

  "India is a country in South Asia. It is the seventh-largest country by land area, the second-most populous country, and the most populous democracy in the world.",

  "Python is an interpreted, high-level and general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant whitespace.",

  "Russia is the largest country in the world by land area, covering more than one-eighth of the Earth's inhabited land area, and the ninth most populous, with about 146.79 million people as of 2019",

  "Nulla nec purus feugiat, vestibulum ligula at, malesuada ante. Curabitur sit amet purus. Nulla nec purus feugiat, vestib",

  "Japan is an island country in East Asia, located in the northwest Pacific Ocean. It is bordered on the west by the Sea of Japan, and extends from the Sea of Okhotsk in the north toward the East China Sea and Taiwan in the south.",

  "C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or 'C with Classes'. The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation.",

  "The fastfood is very popular in the world. It is very tasty and delicious. It is very easy to make and it is very cheap. It is very unhealthy and it is not good for health. It is very high in calories and fat. It is very high in sugar and salt. It is very high in cholesterol and sodium. It is very high in saturated fat",

  "By democracy (Greek: δημοκρατία, dēmokratiā, from dēmos 'people' and kratos 'rule') is a form of government in which the people have the authority to choose their governing legislation. Who people are and how authority is shared among them are core issues for democratic theory, development and constitution. Some cornerstones of these issues are freedom of assembly and speech, inclusiveness and equality, membership, consent, voting, right to life and minority rights.",

  "Today waether is very good, It is a sunny day. The temperature is around 30 degree celsius. The sky is clear and there is no cloud in the sky. The wind is blowing at the speed of 10 km/hr. The humidity is around 40%.",
];

console.log(para.length);

function Generate_paragraph() {
  let number = input.value;
  let text = "";

  // if the input is empty

  if (number === "0" || number === "") {
    output.innerHTML = "";
    let p = document.createElement("p");
    p.innerText = "Enter Valid number of Paragraph";
    p.style.fontWeight = "bolder";
    p.style.background = "red";
    output.appendChild(p);
  } else if (number > 20 || number < 1 || number === "0" || number === "") {
    output.innerHTML = "";
    let p = document.createElement("p");
    p.style.background = "red";
    p.style.fontWeight = "bolder";
    p.innerText = "Enter Number between 1 - 20";
    output.appendChild(p);
} else {
    output.innerHTML = "";
    for (let i = 0; i < number; i++) {
        let index = Math.floor(Math.random() * 19) + 1;
        let p = document.createElement("p");
      p.innerText = para[index - 1];
      console.log(index - 1);
      output.appendChild(p);
    }
  }
  input.value = "";
}

btn.addEventListener("click", Generate_paragraph);
// if you want to generate the paragraph on pressing enter
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    Generate_paragraph();
  }
});
