function add(numbers) {
  let sum = 0;
  numbers.forEach(number => sum += number);
  return sum;
}

function subtract(numbers) {
  let diff = numbers[0];
  for (i = 0; i < numbers.length-1; i++) {
    diff -= numbers[i+1]
  }
  return diff;
}

function multiply(numbers) {
  let product = 1;
  numbers.forEach(number => product *= number);
  return product;
}

function divide(numbers) {
  let quotient = numbers[0];
  for (i = 0; i < numbers.length-1; i++) {
    quotient /= numbers[i+1]
  }
  return quotient;
}
