// functions

function add(num1, num2) {
  return num1 + num2;
}

function substract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(funct, num1, num2) {}

let screen = document.getElementById("item1");
let buttons = document.getElementsByClassName("button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    screen.textContent = screen.textContent + this.textContent;
    console.log(i);
  };
}
