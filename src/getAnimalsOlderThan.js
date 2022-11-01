const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const ficha = data.species.filter((element) => element.name === animal)[0];
  return ficha.residents.every((element) => element.age >= age);
}

module.exports = getAnimalsOlderThan;
