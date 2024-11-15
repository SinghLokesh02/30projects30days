let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let search = document.getElementById("search");
let getbtn = document.getElementById("btn");
let output = document.getElementById("output");

getbtn.addEventListener("click", function () {
   
  fetch(url + search.value)
    .then((response) => response.json())
    .then((data) => {
       
      let partOfSpeech = data[0].meanings[0].partOfSpeech;
      let meaning = data[0].meanings[0].definitions[0].definition;
      let example =
        data[0].meanings[1]?.definitions[0]?.definition ||
        "No example available";
      let otherMeaning = data[0].phonetics[1]?.text || "";
      let audio = data[0].phonetics[0].audio;

      output.innerHTML = ` 
          <div class="word-logo">
            <div class="word">
              <h3>${search.value}</h3>
              <p>${partOfSpeech} // ${otherMeaning} //</p>
            </div>
            <div class="logo">
              <i  id="playAudio" class="fa-solid fa-volume-high"></i>
            </div>
          </div>
          <div class="meaning">
            <p>${meaning}</p>
            <p>Example - ${example}</p>
          </div>      
         `;

      // Check if audio source is available
      if (audio) {
        let myaudio = new Audio(audio);
        document.getElementById("playAudio").addEventListener("click", () => {
          myaudio.play();
        });
      }
    })
    .catch((error) => {
      output.innerHTML = `<h3 id="not_found">Word Not Found</h3>`;
    });
});
