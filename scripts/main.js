function operate(operator, firstNum, secNum) {
  let answer;
  switch (operator) {
    case 'add':
      return add([firstNum, secNum]);
    case 'subtract':
      return subtract([firstNum, secNum]);
    case 'multiply':
      return multiply([firstNum, secNum]);
    case 'divide':
      return divide([firstNum, secNum]);
  }
}
