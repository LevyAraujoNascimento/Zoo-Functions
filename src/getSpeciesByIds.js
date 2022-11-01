const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const result = [];
  if (ids === undefined) {
    return [];
  }
  for (let index = 0; index < ids.length; index += 1) {
    let obj = data.species.filter((element) => element.id === ids[index]);
    result.push(obj[0]);
  }
  return result;
}

module.exports = getSpeciesByIds;