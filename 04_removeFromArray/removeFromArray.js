const removeFromArray = function(theArray, ...argsToRemove) {
    // Iterate over all arguments that should be remove from the array.
    // In the inner loop we test each element if it is equal to ohne of the arguments to remove

    // Filters array with array with includes method
    return theArray.filter((elementToCheck) => !argsToRemove.includes(elementToCheck));
};

// Do not edit below this line
module.exports = removeFromArray;
