// * Operators

const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

const operate = (operator, num1, num2) => {
  return operator(num1, num2);
};

// * Calculator

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let currentDisplay = '';

const inputDigit = (input) => {
  if (currentDisplay.length === 11) return;

  currentDisplay += input;
  display.textContent = currentDisplay;
  console.log(input);
};

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    inputDigit(e.target.value);
  });
});
