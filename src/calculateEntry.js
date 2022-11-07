const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const result = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((element) => {
    if (element.age < 18) {
      result.child += 1;
    }
    if (element.age >= 18 && element.age < 50) {
      result.adult += 1;
    }
    if (element.age >= 50) {
      result.senior += 1;
    }
  });
  return result;
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants.length === 0 || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  return (data.prices.adult * adult) + (data.prices.child * child) + (data.prices.senior * senior);
}

module.exports = { calculateEntry, countEntrants };
