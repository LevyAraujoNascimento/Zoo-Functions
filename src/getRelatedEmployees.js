const data = require('../data/zoo_data');

function isManager(id) {
  let gerentes = [];
  for (let index = 0; index < data.employees.length; index += 1) {
    gerentes = gerentes.concat(data.employees[index].managers);
  }
  return gerentes.some((element) => element === id);
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const result = data.employees.map((element) => {
    const gerentes = element.managers;
    if (gerentes.some((e) => e === managerId)) {
      return `${element.firstName} ${element.lastName}`;
    }
    return undefined;
  });
  return result.filter((element) => element !== undefined);
}

module.exports = { isManager, getRelatedEmployees };
