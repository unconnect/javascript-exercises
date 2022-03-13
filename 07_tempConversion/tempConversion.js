// Rounding numbers by representing them in exponential notation
// https://www.jacklmoore.com/notes/rounding-in-javascript/#:~:text=rounding%20in%20JavaScript.-,Rounding%20Errors,round()%20.
function round(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

const ftoc = function(ftemp) {
  const ctemp = (ftemp - 32) * 5 / 9;
  return round(ctemp, 1);
};

const ctof = function(ctemp) {
  const ftemp = ctemp * 9 / 5 + 32;
  return round(ftemp, 1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
