const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  function verify(element) {
    return element.firstName === employeeName || element.lastName === employeeName;
  }
  return data.employees.find(verify);
}

module.exports = getEmployeeByName;
