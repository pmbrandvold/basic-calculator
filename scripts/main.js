let secondNumberPopulate = false;
const decimal = new RegExp('\.');

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
      if (secNum === 0) {
        alert("What are you, trying to break the universe?!! You can't divide by 0!");
        clear();
        return;
      }
      results = divide(firstNum, secNum);
      break;
  }
  operatorChoice = undefined;
  if (decimal.test(results.toString()) === true) {
    updateDisplay(results);
  } else {
    updateDisplay(results.toFixed(6));
  }
}

const display = document.getElementById('display');
function updateDisplay(currentDisplay) {
    display.firstChild.innerHTML = currentDisplay;
}

function equals(operation) {
  operate(operation, Number(firstSet.join('')), Number(secondSet.join('')));
  firstSet = [results];
  secondSet = [];
}

const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', clear);
function clear() {
  firstSet = [];
  secondSet = [];
  secondNumberPopulate = false;
  operatorChoice = undefined;
  updateDisplay('0');
}

let firstSet = [];
let secondSet = [];
let operatorChoice;
const numbers = Array.from(document.getElementsByClassName('numbers'));
numbers.forEach(number => number.addEventListener('click', function() {
  if (secondNumberPopulate === false) {
    if (number.id === "decimalButton" && firstSet.includes('.')) {
      alert('You already have a decimal point');
      return;
    } else {
      firstSet.push(number.innerHTML)
      updateDisplay(firstSet.join(''));
    }
  } else {
    if (operatorChoice === undefined) {
      alert('Which operation do you want?');
      return;
    }
    if (number.id === "decimalButton" && secondSet.includes('.')) {
      alert('You already have a decimal point');
      return;
    } else {
      secondSet.push(number.innerHTML)
      updateDisplay(secondSet.join(''));
    }
  }
}));

const equalsButton = document.getElementById('equalsButton')
equalsButton.addEventListener('click', function() {
  if (firstSet.length === 0) {
    alert('need a number');
    return;
  }
  if (operatorChoice === undefined) {
    alert('not sure what to do with the numbers');
    return;
  }
  if (secondSet.length === 0) {
    alert('need a second number');
    return;
  }

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
  if (firstSet.length === 0) {
    alert('Not sure how to ' + operator.innerHTML + ' with no numbers');
    return;
  }
  if (operatorChoice !== undefined) {
    alert('You already chose an operation');
    return;
  }
  secondNumberPopulate = true;
  operatorChoice = operator.innerHTML;
  updateDisplay(operatorChoice);
}));

let lastButtonClicked = null;
document.addEventListener('click', (e) => {
  if (e.target.id !== "delButton") {
    lastButtonClicked = e.target
  }
});

delButton = document.getElementById('delButton');
delButton.addEventListener('click', function() {
  deleteLastChoice(lastButtonClicked);
});

function deleteLastChoice(lastChoice) {
  if (secondNumberPopulate === false && operatorChoice === undefined) {
    firstSet.pop();
    updateDisplay(firstSet.join(''));
  } else if (lastChoice.innerHTML === operatorChoice) {
    operatorChoice = undefined;
    updateDisplay(firstSet.join(''));
  } else if (secondNumberPopulate === true && operatorChoice !== undefined) {
    secondSet.pop();
    updateDisplay(operatorChoice);//secondSet.join(''));
  }
}
