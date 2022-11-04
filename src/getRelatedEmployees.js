const data = require('../data/zoo_data');

function isManager(id) {
  return id;
}

function getRelatedEmployees(managerId) {
  return isManager(managerId);
}

module.exports = { isManager, getRelatedEmployees };
