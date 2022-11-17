const DOMSelectors = {
  box: document.getElementById(`questions`),
  input1: document.getElementById(`input1`),
  input2: document.getElementById(`input2`),
  input3: document.getElementById(`input3`),
  injector: document.getElementById(`injector`),
  reseter: document.getElementById(`reseter`),
  newObj: document.getElementById(`newObj`),
  objName: document.getElementById(`objName`),
  objAge: document.getElementById(`objAge`),
};

DOMSelectors.injector.addEventListener("click", function () {
  let name = DOMSelectors.input1.value;
  let age = DOMSelectors.input2.value;
  let favClr = DOMSelectors.input3.value;
  const profile = {
    name: `${name}`,
    age: `${age}`,
    favClr: `${favClr}`,
  };

  inject(
    DOMSelectors.newObj,
    DOMSelectors.objName,
    DOMSelectors.objAge,
    profile.name,
    profile.age,
    profile.favClr
  );
  clear();
});

function clear() {
  DOMSelectors.input1.value = "";
  DOMSelectors.input2.value = "";
  DOMSelectors.input3.value = "";
}

function inject(background, nameLine, ageLine, name, age, favClr) {
  background.style.backgroundColor = `${favClr}`;
  nameLine.textContent = `Hi! My name is ${name}.`;
  ageLine.textContent = `I am ${age} years old.`;
  DOMSelectors.reseter.innerHTML = `<button type="button" class="button" id="reseter">
  Click Here to Reset
</button>`;
}

DOMSelectors.reseter.addEventListener("click", function () {
  DOMSelectors.newObj.style.backgroundColor = ``;
  DOMSelectors.objName.textContent = ``;
  DOMSelectors.objAge.textContent = ``;
  DOMSelectors.reseter.innerHTML = ``;
});
