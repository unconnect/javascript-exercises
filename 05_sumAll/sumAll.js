const sumAll = function(number1, number2) {

    // Check for smaller 0 or not-a-number
    if (number1 < 0 || number2 < 0 || typeof number1 !== 'number' || typeof number2 !== 'number') {
        return 'ERROR';
    }

    // Checks for larger number first and swiches them
    if(number1 > number2) {
        let dummy = number2;
        number2 = number1;
        number1 = dummy;
    }

    let sum = 0;
    let index = number1;

    while (index <= number2) {
        sum += index;
        index++;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
