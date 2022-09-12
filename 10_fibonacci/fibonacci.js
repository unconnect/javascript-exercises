const fibonacci = function(fibMember) {
  if (fibMember < 0) return 'OOPS'
  if (fibMember <= 1) return Number(fibMember); 
  return fibonacci(fibMember - 1) + fibonacci(fibMember - 2);
};

// Do not edit below this line
module.exports = fibonacci;
