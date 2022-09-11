const add = function (number1, number2) {
  return number1 + number2
};

const subtract = function(number1, number2) {
  return number1 - number2
};

const sum = function(numbers) {
	return numbers.reduce((total, currentVal) => total + currentVal, 0);
};

const multiply = function(numbers) {
	return numbers.reduce((total, currentVal) => total * currentVal, 1);
};

const power = function(number1, number2) {
  return number1 ** number2
};

const factorial = function(number) {
  if(number === 0) return 1
	return number * factorial(number - 1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
