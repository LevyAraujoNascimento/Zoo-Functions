const data = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  if (data.species.some((element) => element.name === scheduleTarget)) {
    const ficha = data.species.find((element) => element.name === scheduleTarget);
    return ficha.availability;
  }
  if (Object.keys(data.hours).some((element) => element === scheduleTarget)) {
    const horario = data.hours[scheduleTarget]; 
    const animais = [];
    const result = {};
    for (let index = 0; index < data.species.length; index += 1) {
      if (data.species[index].availability.some((element) => element === scheduleTarget)) {
        animais.push(data.species[index].name);  
      }
    };
    if (horario.open === 0 || horario.close === 0) {
      Object.defineProperty(result, scheduleTarget, {
        value: {
          officeHour: 'CLOSED', 
          exhibition: 'The zoo will be closed!',
        },
        enumerable: true,
      });
    } else {
      Object.defineProperty(result, scheduleTarget, {
        value: {
          officeHour: `Open from ${horario.open}am until ${horario.close}pm`, 
          exhibition: animais,
        },
        enumerable: true,
      });
    }
    return result;
  }
  const result = {};
  for (let index = 0; index < Object.keys(data.hours).length; index += 1) {
    let animais = [];
    const day = Object.keys(data.hours)[index];
    for (let i = 0; i < data.species.length; i += 1) {
      if (data.species[i].availability.some((element) => element === day)) {
        animais.push(data.species[i].name);  
      }
    }
    const { open } = data.hours[Object.keys(data.hours)[index]];
    const { close } = data.hours[Object.keys(data.hours)[index]];
    if (open === 0 || close === 0) {
      Object.defineProperty(result, Object.keys(data.hours)[index], {
        value: {
          officeHour: 'CLOSED', 
          exhibition: 'The zoo will be closed!',
        },
        enumerable: true,
      });
    } else {
      Object.defineProperty(result, Object.keys(data.hours)[index], {
        value: {
          officeHour: `Open from ${open}am until ${close}pm`, 
          exhibition: animais,
        },
        enumerable: true,
      });
    }
  }
  return result;
}
console.log(getSchedule('Tuesday'));
module.exports = getSchedule;
