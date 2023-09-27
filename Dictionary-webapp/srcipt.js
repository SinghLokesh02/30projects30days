$(document).ready(function(){
    let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    let search = document.getElementById("search");
    let getbtn = document.getElementById("btn");
    let output = document.getElementById("output");
    
    getbtn.addEventListener("click", function(){
        console.log(search.value);
        fetch(url + search.value)
        .then((response) => response.json())
        .then((data) => {
            let partOfSpeech = data[0].meanings[0].partOfSpeech;
            let meaning = data[0].meanings[0].definitions[0].definition;
            output.innerHTML = ` 
            <p id="meaning">${partOfSpeech}</p>
            <div class="mean">
            <h2 id="word">${data[0].word}</h2>
            <h5 id="word">${meaning}</h5>
            </div>
            `
            console.log(data)
        }).catch((error) => {
            output.innerHTML = `<h3 id="not_found">Word Not Found</h3>`
        }).finally(() => {  
            console.log("finally Done");
        });
    })
})


fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
.then((response) => response.json())
.then((data) => {
  let meaning = data[0].meanings[0].definitions[0].definition;
  let meaning1 = data[0].meanings[0].partOfSpeech;
    let meaning2 = data[0].phonetic;
    let word = data[0].word;

  console.log(word);
   
}).catch((error) => {
  console.log("error");
}).finally(() => {  
  console.log("finally Done");
});

/* <div class="details">
<p>${data[0].meanings[0].partOfSpeech}</p>
<p>/${data[0].phonetic}/</p>
</div> */

