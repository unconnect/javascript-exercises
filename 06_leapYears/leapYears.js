const leapYears = function(givenYear) {
    
    // Solution with ifs
    
    // years divisible by 4 are no leap years
    // if(givenYear % 4 !== 0) return false;
    // century years are no leap years, unless divisible by 400
    // if(givenYear % 100 === 0 && givenYear % 400 !== 0) return false;
    // return true;

    // very elegantly solution with boolean expression
    return givenYear % 4 === 0 && (givenYear % 100 !== 0 || givenYear % 400 === 0);

};

// Do not edit below this line
module.exports = leapYears;
