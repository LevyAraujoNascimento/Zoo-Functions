const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Teste Count', () => {
    expect(handlerElephants('count')).toEqual(4);
  });

  it('Teste Names', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('Teste averageAge', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });

  it('Teste location', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });

  it('Teste popularity', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });

  it('Teste availability', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });

  it('Teste sem parametros', () => {
    expect(handlerElephants()).toBeUndefined();
  });
});
