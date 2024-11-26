let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let search = document.getElementById("search");
let getbtn = document.getElementById("btn");
let output = document.getElementById("output");

getbtn.addEventListener("click", function () {
  let searchTerm = search.value.trim();
  if (!searchTerm) {
    output.innerHTML = `<h3 id="not_found">Please enter a word</h3>`;
    return;
  }

  output.innerHTML = `<div class="spinner-border text-primary"></div>`;

  fetch(url + search.value)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
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
      if (error.message.includes("404")) {
        output.innerHTML = `<h3 id="not_found">Word not found</h3>`;
      } else {
        output.innerHTML = `<h3 id="not_found">Network or server error. Please try again later.</h3>`;
      }
    });
});
