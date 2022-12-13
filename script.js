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
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case 'x':
      return multiply(num1, num2);
    case '÷':
      return divide(num1, num2);
    default:
      return;
  }
};

// * Calculator

const mainDisplay = document.querySelector('.main-display');
const secondDisplay = document.querySelector('.second-display');
const numberButton = document.querySelectorAll('.number');
const clearButton = document.querySelector('.clear');

mainDisplay.textContent = '0';

let currentDisplay = '';
let firstDigit = null;
let secondDigit = null;
let operator = '';
let isFirstDigit = true;

const inputDigit = (input) => {
  if (currentDisplay.length >= 11) return;
  if (input === '0' && currentDisplay === '0') return;
  if (input === '.' && currentDisplay.includes('.')) return;
  if (input === '.' && currentDisplay === '') {
    currentDisplay = '0';
  }
  if (input !== '.' && currentDisplay === '0') {
    currentDisplay = '';
  }

  currentDisplay += input;
  mainDisplay.textContent = currentDisplay;
};

numberButton.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    inputDigit(e.target.value);
  });
});

clearButton.addEventListener('click', () => {
  mainDisplay.textContent = '0';

  currentDisplay = '';
  firstDigit = null;
  secondDigit = null;
  operator = '';
  isFirstDigit = true;
});
