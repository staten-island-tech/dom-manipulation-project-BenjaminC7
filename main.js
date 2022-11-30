const DOMSelectors = {
  box: document.getElementById(`questions`),
  input1: document.getElementById(`input1`),
  input2: document.getElementById(`input2`),
  input3: document.getElementById(`input3`),
  injector: document.getElementById(`injector`),
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
  inject(profile.name, profile.age, profile.favClr);
  createReseter();
  clear();
});

function clear() {
  DOMSelectors.input1.value = "";
  DOMSelectors.input2.value = "";
  DOMSelectors.input3.value = "";
}

function inject(name, age, favClr) {
  DOMSelectors.box.insertAdjacentHTML(
    "afterend",
    `<div id="newObj">
    <h2 id="objName">Hi! My name is ${name}.</h2>
    <h3 id="objAge">I am ${age} years old.</h3>
    <button type="button" class="button" id="reseter">
    Click Here to Reset
    </button>
    </div>`
  );
  const newObj = document.getElementById(`newObj`);
  newObj.style.backgroundColor = `${favClr}`;
}

function createReseter() {
  const reseter = document.getElementById("reseter");
  const newObj = document.getElementById(`newObj`);
  reseter.addEventListener("click", function () {
    newObj.remove();
  });
}
