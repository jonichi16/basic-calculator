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
      return add(num1, num2);
  }
};

// * Calculator

const mainDisplay = document.querySelector('.main-display');
const secondDisplay = document.querySelector('.second-display');
const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');

mainDisplay.textContent = '0';

let currentDisplay = '';
let firstDigit = null;
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

operatorButton.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    if (!currentDisplay) return;

    if (firstDigit) {
      currentDisplay = operate(operator, firstDigit, Number(currentDisplay));
      mainDisplay.textContent = currentDisplay;
      secondDisplay.textContent = currentDisplay + operator;
    }

    secondDisplay.textContent = currentDisplay + e.target.dataset.operator;
    firstDigit = Number(currentDisplay);
    operator = e.target.dataset.operator;
    currentDisplay = '0';

    console.log(firstDigit);
    console.log(operator);
    console.log(currentDisplay);
  });
});

clearButton.addEventListener('click', (e) => {
  e.preventDefault();

  mainDisplay.textContent = '0';
  secondDisplay.textContent = '';

  currentDisplay = '';
  firstDigit = null;
  operator = '';
  isFirstDigit = true;
});
