const findTheOldest = function(people = {}) {
  return people.reduce((prevPerson, currentPerson) => {
    if (currentPerson["yearOfDeath"] === undefined)
    currentPerson["yearOfDeath"] = new Date().getFullYear();
    if (prevPerson.name === undefined) return currentPerson
    if(prevPerson.yearOfDeath - prevPerson.yearOfBirth <
      currentPerson.yearOfDeath -
      currentPerson.yearOfBirth) prevPerson = currentPerson;
    return prevPerson
  }, {})
};

// Do not edit below this line
module.exports = findTheOldest;
