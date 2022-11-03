const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  point: document.querySelectorAll(".point"),
  box: document.getElementById("big-black-box"),
};
function backgroundAndText(background, text) {
  background.style.backgroundColor = "red";
  text.innerHTML = "Ths is now a big red box";
  text.style.fontSize = "40px";
}

backgroundAndText(DOMSelectors.box, DOMSelectors.text);
