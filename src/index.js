function generate(event) {
    event.preventDefault();
    new Typewriter("#poem", {
      strings: "poem",
      autoStart: true,
      delay: 1,
      cursor: "",
    });
    poemBox.innerHTML = "poem";
}
let poemFormElement = document.querySelector("#generator");
poemFormElement.addEventListener('submit', generate);
generate();