const data = require('../data/zoo_data');

const diasAnimal = (animal) => {
  const ficha = data.species.find((element) => element.name === animal);
  return ficha.availability;
};

const getAnimals = (dia) => {
  const animais = [];
  data.species.forEach((element) => {
    if (element.availability.some((e) => e === dia)) {
      animais.push(element.name);
    }
  });
  return animais;
};

const horarioDia = (dia) => {
  const { open, close } = data.hours[dia];
  result = {};
  let ofcH = '';
  let exht = '';
  if (open === 0 && close === 0) {
    ofcH = 'CLOSED';
    exht = 'The zoo will be closed!';
  } else {
    ofcH = `Open from ${open}am until ${close}pm`;
    exht = getAnimals(dia);
  }
  result[dia] = {
    officeHour: ofcH,
    exhibition: exht,
  };
  return result;
};

function getSchedule(scheduleTarget) {
  const dias = Object.keys(data.hours);
  const result = {};
  if (data.species.some((element) => element.name === scheduleTarget)) {
    return diasAnimal(scheduleTarget);
  }
  if (dias.some((element) => element === scheduleTarget)) {
    return horarioDia(scheduleTarget);
  }
  dias.forEach((element) => {
    result[element] = horarioDia(element)[element];
  });
  return result;
}

module.exports = getSchedule;
