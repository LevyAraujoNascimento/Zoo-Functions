const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Teste sem parametros', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(expected);
  });

  it('Teste dia e hora AM aberto', () => {
    const expected = 'The zoo is open';
    expect(getOpeningHours('Tuesday', '9:00-AM')).toEqual(expected);
  });

  it('Teste dia e hora PM aberto', () => {
    const expected = 'The zoo is open';
    expect(getOpeningHours('Friday', '2:00-PM')).toEqual(expected);
  });

  it('Teste dia e hora AM fechado', () => {
    const expected = 'The zoo is closed';
    expect(getOpeningHours('Wednesday', '2:00-AM')).toEqual(expected);
  });

  it('Teste dia e hora PM fechado', () => {
    const expected = 'The zoo is closed';
    expect(getOpeningHours('Saturday', '10:00-PM')).toEqual(expected);
  });

  it('Teste dia errado', () => {
    expect(() => getOpeningHours('day', '11:00-PM')).toThrow(/^The day must be valid. Example: Monday$/);
  });

  it('Teste hora errada', () => {
    expect(() => getOpeningHours('Monday', 'Levy:00-AM')).toThrow(/^The hour should represent a number$/);
  });

  it('Teste minuto errado', () => {
    expect(() => getOpeningHours('Monday', '10:Levy-AM')).toThrow(/^The minutes should represent a number$/);
  });

  it('Teste valor da hora', () => {
    expect(() => getOpeningHours('Monday', '14:00-AM')).toThrow(/^The hour must be between 0 and 12$/);
  });

  it('Teste valor do minuto', () => {
    expect(() => getOpeningHours('Monday', '10:80-AM')).toThrow(/^The minutes must be between 0 and 59$/);
  });
});
