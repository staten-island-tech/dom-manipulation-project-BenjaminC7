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
function create() {
  let name = DOMSelectors.input1.value;
  let age = DOMSelectors.input2.value;
  let favClr = DOMSelectors.input3.value;
  const profile = {
    name: `${name}`,
    age: `${age}`,
    favClr: `${favClr}`,
  };
  function inject(backgrond, name, age) {
    backgrond.style.backgrondColor = `${profile.favClr}`;
    name.textContent = `${profile.name}`;
    age.textContent = `${profile.age}`;
  }
  function clear() {
    DOMSelectors.input1.value = "";
    DOMSelectors.input2.value = "";
    DOMSelectors.input3.value = "";
  }
  DOMSelectors.injector.addEventListener("click", function clear() {
    inject(DOMSelectors.newObj, DOMSelectors.objName, DOMSelectors.objAge);
    clear();
  });
}
