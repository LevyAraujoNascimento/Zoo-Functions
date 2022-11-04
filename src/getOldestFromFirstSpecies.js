const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const { responsibleFor } = data.employees.find((element) => element.id === id);
  const ficha = data.species.find((element) => element.id === responsibleFor[0]);
  const oldest = ficha.residents.sort((a, b) => b.age - a.age)[0];
  const { name, sex, age } = oldest;
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
