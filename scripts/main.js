const display = document.getElementById('display');
let results;

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
