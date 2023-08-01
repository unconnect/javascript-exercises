const calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return {
    add,
    sub,
    mul,
    div,
  };
})();

const anotherCalculator = calculator;

const { add, sub, mul, div } = calculator;

console.log(
  calculator.add(3, 5), // 8
  calculator.sub(6, 2), // 4
  calculator.mul(14, 5534), // 77476
  anotherCalculator.add(1, 2), // 3
  add(4, 2) // 6, extracted mothods from calculator
);
