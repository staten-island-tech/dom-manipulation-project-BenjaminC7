const DOMSelectors = {
  box: document.getElementById(`questions`),
  button1: document.getElementById(`btn1`),
  button2: document.getElementById(`btn2`),
  button3: document.getElementById(`btn3`),
  input1: document.getElementById(`input1`),
  input2: document.getElementById(`input2`),
  input3: document.getElementById(`input3`),
};

DOMSelectors.button1.addEventListener("click", function () {
  let input1 = DOMSelectors.input1.value;
  DOMSelectors.box.insertAdjacentHTML("afterend", `<p>${input1}</p>`);
  DOMSelectors.input1.value = "";
});
DOMSelectors.button2.addEventListener("click", function () {
  let input2 = DOMSelectors.input2.value;
  DOMSelectors.box.insertAdjacentHTML("afterend", `<p>${input2}</p>`);
  DOMSelectors.input2.value = "";
});
DOMSelectors.button3.addEventListener("click", function () {
  let input3 = DOMSelectors.input3.value;
  DOMSelectors.box.insertAdjacentHTML("afterend", `<p>${input3}</p>`);
  DOMSelectors.input3.value = "";
});
