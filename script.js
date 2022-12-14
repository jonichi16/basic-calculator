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
  if (num1 === 0) {
    return 'ERROR';
  } else {
    return num1 / num2;
  }
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
const operatorButton = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');

mainDisplay.textContent = '0';

let currentDisplay = '';
let answer = null;
let firstDigit = null;
let secondDigit = null;
let operator = null;
let isOperator = false; // * Check if last input is operator

const inputDigit = (input) => {
  if (currentDisplay.length >= 11) return;
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
    isOperator = false;
  });
});

operatorButton.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    if (!currentDisplay && !firstDigit) return;

    // This will prevent using operate function when last input is operator
    if (isOperator && operator !== '=') {
      answer = firstDigit;
    } else {
      answer = operate(operator, firstDigit, Number(currentDisplay));
    }

    if (answer !== undefined) {
      firstDigit = answer;
      mainDisplay.textContent = answer;
    } else if (operator === '=') {
      firstDigit = firstDigit;
    } else {
      firstDigit = Number(currentDisplay);
    }

    operator = e.target.dataset.operator;
    currentDisplay = '0';
    secondDisplay.textContent = firstDigit + operator;
    isOperator = true;

    console.log(firstDigit);
    console.log(operator);
    console.log(answer);
    console.log(isOperator);
  });
});

clearButton.addEventListener('click', (e) => {
  e.preventDefault();

  mainDisplay.textContent = '0';
  secondDisplay.textContent = '';

  currentDisplay = '';
  answer = null;
  firstDigit = null;
  operator = '';
  isOperator = false;
});
