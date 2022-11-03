const data = require('../data/zoo_data');

function isManager(id) {
  let gerentes = [];
  for (let index = 0; index < data.employees.length; index += 1) {
    gerentes = gerentes.concat(data.employees[index].managers);   
  }
  return gerentes.some((element) => element === id);
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const result = [];
    for (let index = 0; index < data.employees.length; index += 1) {
      const encarregados = data.employees[index].managers;
      if (encarregados.includes(managerId) === true) {
        result.push(`${data.employees[index].firstName} ${data.employees[index].lastName}`);
      }
    }
    return result;
  }
}
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c099'));
module.exports = { isManager, getRelatedEmployees };
