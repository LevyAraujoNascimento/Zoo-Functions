const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((element) => element.age < 18);
  const adult = entrants.filter((element) => element.age >= 18 && element.age < 50);
  const senior = entrants.filter((element) => element.age >= 50);
  const result = {
    child: child.length,
    adult: adult.length,
    senior: senior.length,
  };
  return result;
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants.length === 0) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  return (data.prices.adult * adult) + (data.prices.child * child) + (data.prices.senior * senior);
}

module.exports = { calculateEntry, countEntrants };
