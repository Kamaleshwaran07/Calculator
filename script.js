var result = document.getElementById("result");
var currentValue = "";

function appendValue(value) {
  currentValue += value;
  result.value = currentValue;
}
function Clear() {
  currentValue = "";
  result.value = "";
}

function Delete() {
  currentValue = currentValue.slice(0, -1);
  result.value = currentValue;
}
function Evaluate() {
  try {
    currentValue = eval(currentValue).toString();
    result.value = currentValue;
  } catch (error) {
    alert("Invalid Expression");
    Clear();
  }
}
document.addEventListener("keydown", function (event) {
  var key = event.key;
  if (
    /\d/.test(key) ||
    key === "+" ||
    key === "-" ||
    key === "/" ||
    key === "*" ||
    key === "%" ||
    key === "."
  ) {
    appendValue(key);
  } else if (key === "Enter" || key === "NUMPAD ENTER" || key === "=") {
    Evaluate();
  } else if (key === "Delete") {
    Clear();
  } else if (key === "Backspace") {
    Delete();
  } else {
    alert("Use only numbers and symbols");
  }
});
