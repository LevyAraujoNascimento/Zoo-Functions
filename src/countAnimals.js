const data = require('../data/zoo_data');

function countAnimals(animal) {
  const result = {};
  if (animal === undefined) {
    for (let index = 0; index < data.species.length; index += 1) {
      const ficha = data.species[index];
      Object.defineProperty(result, ficha.name, {
        value: ficha.residents.length,
        enumerable: true,
      });
    }
    return result;
  }
  const ficha = data.species.find((element) => element.name === animal.specie);
  if (animal.sex === undefined) {
    return ficha.residents.length;
  }
  const animais = ficha.residents.filter((element) => element.sex === animal.sex);
  return animais.length;
}

module.exports = countAnimals;
