const display = document.getElementById('display');
let results;
let numbersToOperate = [];

function operate(operator, firstNum, secNum) {
  switch (operator) {
    case 'add':
      results = add([firstNum, secNum]);
      break;
    case 'subtract':
      results = subtract([firstNum, secNum]);
      break;
    case 'multiply':
      results = multiply([firstNum, secNum]);
      break;
    case 'divide':
      results = divide([firstNum, secNum]);
      break;
  }
  updateDisplay();
}

function updateDisplay() {
  if (results === 0) {
    display.innerHTML = '0';
    display.classList = "cleared";
  } else {
    display.innerHTML = results;
  }
}

function clear() {
  results = 0;
  updateDisplay();
}

const numbers = Array.from(document.getElementsByClassName('numbers'));
numbers.forEach(number => number.addEventListener('click', function() {
  recordNumberClick(number);
}));

function recordNumberClick(numberButton) {
  numbersToOperate.push(Number(numberButton.innerHTML));
}

const equalsButton = document.getElementById('equalsButton')
equalsButton.addEventListener('click', function() {equals('add')});

function equals(operation) {
  operate(operation, numbersToOperate[0], numbersToOperate[1]);
}
