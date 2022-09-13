const findTheOldest = function(people = {}) {
  return people.reduce((oldestPerson, currentPerson) => {
    if (!oldestPerson.name) oldestPerson = currentPerson;
    const ageCurrentPerson = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
    const ageOldestPerson = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
    if (ageOldestPerson < ageCurrentPerson) oldestPerson = currentPerson;
    return oldestPerson
  }, {})
};

const getAge = (birthYear, deathYear) => {
  if (!deathYear) deathYear = new Date().getFullYear();
  return (deathYear - birthYear);
}

// Do not edit below this line
module.exports = findTheOldest;
