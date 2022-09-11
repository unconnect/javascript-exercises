const palindromes = function (string) {
  const regEx = /[\s\,\.\!\?\']/gi;
  const mergedString = string.toLowerCase().replaceAll(regEx, "");
  const reversedString = Array.from(mergedString).reverse().join("");
  return mergedString === reversedString;
};
// Do not edit below this line
module.exports = palindromes;
