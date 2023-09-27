$(document).ready(function(){
//     let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
//     let search = document.getElementById("search");
//     let getbtn = document.getElementById("btn");
//     let output = document.getElementById("output");
    
//     getbtn.addEventListener("click", function(){
//         console.log(search.value);
//         fetch(url + search.value)
//         .then((response) => response.json())
//         .then((data) => {
//             let meaning = data[0].meanings[0].definitions[0].definition;
//             output.innerHTML = ` 
//             <h2 id="word">${search.value}</h2>
//             <p id="meaning">${meaning}</p>
           
//             `
//             console.log(data)
//         }).catch((error) => {
//             output.innerHTML = `<h3 id="not_found">Word Not Found</h3>`
//         }).finally(() => {  
//             console.log("finally Done");
//         });
//     })
// })
