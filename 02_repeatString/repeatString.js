const repeatString = function(stringToRepeat, numberToRepeatString) {
    const _stringToRepeat = stringToRepeat;
    const _numberToRepeatString = numberToRepeatString;
    const _theStrings = []
    
    for (let index = 0; index < _numberToRepeatString; index++) {
        _theStrings.push(_stringToRepeat);
    }
    
    return (_numberToRepeatString === -1) ? 'ERROR' : _theStrings.join('');
};

// Do not edit below this line
module.exports = repeatString;
