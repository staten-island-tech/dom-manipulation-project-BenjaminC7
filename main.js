const DOMSelectors = {
  box: document.getElementById(`questions`),
  input1: document.getElementById(`input1`),
  input2: document.getElementById(`input2`),
  input3: document.getElementById(`input3`),
  injecter: document.getElementById(`injector`),
  reseter: document.getElementById(`reseter`),
};
DOMSelectors.injecter.addEventListener("click", function () {
  let name = DOMSelectors.input1.value;
  let age = DOMSelectors.input2.value;
  let favClr = DOMSelectors.input3.value;
  const profile = {
    name: `${name}`,
    age: `${age}`,
    favClr: `${favClr}`,
  };
  DOMSelectors.box.insertAdjacentHTML(
    "afterend",
    `Hello my name is ${profile.name}. I am ${profile.age} years old and my favorite color is ${profile.favClr}.`
  );
  DOMSelectors.input1.value = "";
  DOMSelectors.input2.value = "";
  DOMSelectors.input3.value = "";
});
