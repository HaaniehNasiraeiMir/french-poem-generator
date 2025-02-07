function displayPoem(response) {
    new Typewriter("#poem", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor: "",
    });
}
function generate(event) {
    event.preventDefault();
    let input = document.querySelector("#input");
    let apiKey = "ffaeodfecfc1t6ea1f3ed031874f0dab";
    let prompt = `user instructions: generate a French poem about ${input.value}`;
    let context =
      "you are a romantic poem expert who loves to say short poems. your mission is to generate a 4 line poem and separate each line with <br/>. make sure to follow the user instructions:";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    let poemElement = document.querySelector("#poem");
    poemElement.style.display = 'block';
    poemElement.innerHTML = `Generating the French poem about ${input.value}...`;
    axios.get(apiUrl).then(displayPoem);
    
    poemBox.innerHTML = "poem";
}
let poemFormElement = document.querySelector("#generator");
poemFormElement.addEventListener('submit', generate);
generate();