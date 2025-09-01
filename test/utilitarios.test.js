const Utilitarios = require('../src/utilitarios');

const utilitarios = new Utilitarios();

describe('Utilitarios', () => {
  test('Dividir dois valores válidos', () => {
    expect(utilitarios.dividir(20, 10)).toBe(2);
  });

  test('Dividir por zero lança erro', () => {
    expect(() => utilitarios.dividir(5, 0)).toThrow('Divisão por zero');
  });

  test('Inverter String', () => {
    expect(utilitarios.inverterString('hello')).toBe('olleh');
  });

  test('Contar caracteres', () => {
    expect(utilitarios.contarCaracteres('hello')).toBe(5);
  });


});
