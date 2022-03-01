const reverseString = function(stringToReverse) {
    // const array_stringToReverse = stringToReverse.split(); // Breaks with unicode chars
    // one of some solutions
    // see: https://stackoverflow.com/questions/4547609/how-to-get-character-array-from-a-string/34717402#34717402
    const array_stringToReverse = [...stringToReverse];
    return array_stringToReverse.reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
