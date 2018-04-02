let results;
function operate(operator, firstNum, secNum) {
  switch (operator) {
    case 'add':
      results = add(firstNum, secNum);
      break;
    case 'subtract':
      results = subtract(firstNum, secNum);
      break;
    case 'multiply':
      results = multiply(firstNum, secNum);
      break;
    case 'divide':
      results = divide(firstNum, secNum);
      break;
  }
  updateDisplay(results);
}

const display = document.getElementById('display');
function updateDisplay(currentDisplay) {
  if (results === 0) {
    display.innerHTML = '0';
    display.classList = "cleared";
  } else {
    display.innerHTML = currentDisplay;
  }
}

function equals(operation) {
  operate(operation, number, number2);
  number = results;
}

function clear() {
  results = 0;
  updateDisplay();
}

let number;
let number2;
let operatorChoice;
function recordNumberClick(numberButton) {
  if (number !== undefined) {
    number2 = Number(numberButton.innerHTML);
    updateDisplay(number2);
  } else {
    number = Number(numberButton.innerHTML);
    updateDisplay(number);
  }
}

function recordOperationClick(operatorButton) {
  operatorChoice = operatorButton.innerHTML;
  updateDisplay(operatorChoice);
}
const numbers = Array.from(document.getElementsByClassName('numbers'));
numbers.forEach(number => number.addEventListener('click', function() {
  recordNumberClick(number);
}));

const equalsButton = document.getElementById('equalsButton')
equalsButton.addEventListener('click', function() {
  if (operatorChoice === '*') {
    equals('multiply');
  } else if (operatorChoice === '/') {
    equals('divide');
  } else if (operatorChoice === '-') {
    equals('subtract');
  } else {
    equals('add');
  }
});

const operators = Array.from(document.getElementsByClassName('operators'));
operators.forEach(operator => operator.addEventListener('click', function() {
  recordOperationClick(operator);
}));
