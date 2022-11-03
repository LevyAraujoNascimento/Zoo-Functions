const data = require('../data/zoo_data');

function isManager(id) {
  let gerentes = [];
  for (let index = 0; index < data.employees.length; index += 1) {
      gerentes = gerentes.concat(data.employees[index].managers);   
  }
  return gerentes.some((element) => element === id);
}

function getRelatedEmployees(managerId) {
  try {
      if (isManager(managerId) === false) {
        throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
      }
      const result = [];
      for (let index = 0; index < data.employees.length; index += 1) {
        const encarregados = data.employees[index].managers;
        if (encarregados.includes(managerId) === true) {
          result.push(`${data.employees[index].firstName} ${data.employees[index].lastName}`);
        }
      }
      return result;
  } catch (error) {
      return error.message;
  }
}
console.log(getRelatedEmployees('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
module.exports = { isManager, getRelatedEmployees };
