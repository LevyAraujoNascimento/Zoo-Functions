const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const result = [];
  if (ids === undefined) {
    return [];
  }
  for (let index = 0; index < ids.length; index+=1) {
    result.push((data.species.filter((element) => element.id === ids[index]))[0]);    
  }
  return result;
}

module.exports = getSpeciesByIds;


