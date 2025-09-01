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

  test('Para maiúsculas', () => {
    expect(utilitarios.paraMaiusculas('abC')).toBe('ABC');
  });

  test('Para minúsculas', () => {
    expect(utilitarios.paraMinusculas('AbC')).toBe('abc');
  });

  test('Primeira letra maiúscula', () => {
    expect(utilitarios.primeiraLetraMaiuscula('texto')).toBe('Texto');
  });

  test('Somar', () => {
    expect(utilitarios.somar(3, 4)).toBe(7);
  });

  test('Subtrair', () => {
    expect(utilitarios.subtrair(10, 4)).toBe(6);
  });

  test('Multiplicar', () => {
    expect(utilitarios.multiplicar(3, 5)).toBe(15);
  });

  test('Eh par true', () => {
    expect(utilitarios.ehPar(8)).toBe(true);
  });

  test('Eh par false', () => {
    expect(utilitarios.ehPar(7)).toBe(false);
  });

  test('Primeiro elemento', () => {
    expect(utilitarios.primeiroElemento([9, 8, 7])).toBe(9);
  });

  test('Último elemento', () => {
    expect(utilitarios.ultimoElemento([9, 8, 7])).toBe(7);
  });

  test('Tamanho array', () => {
    expect(utilitarios.tamanhoArray([1,2,3,4])).toBe(4);
  });

  test('Ordenar array sem mutar original', () => {
    const arr = ['c','a','b'];
    const ordenado = utilitarios.ordenarArray(arr);
    expect(ordenado).toEqual(['a','b','c']);
    expect(arr).toEqual(['c','a','b']);
  });

  test('Inverter array sem mutar original', () => {
    const arr = [1,2,3];
    const invertido = utilitarios.inverterArray(arr);
    expect(invertido).toEqual([3,2,1]);
    expect(arr).toEqual([1,2,3]);
  });

  test('Gerar número aleatório (mock)', () => {
    const original = Math.random;
    Math.random = () => 0.57;
    expect(utilitarios.gerarNumeroAleatorio(100)).toBe(57);
    Math.random = original;
  });

  test('É número válido', () => {
    expect(utilitarios.ehNumero(10)).toBe(true);
  });

  test('Não é número (NaN)', () => {
    expect(utilitarios.ehNumero(Number('x'))).toBe(false);
  });

  test('Não é número (string)', () => {
    expect(utilitarios.ehNumero('10')).toBe(false);
  });

  test('Remover espaços', () => {
    expect(utilitarios.removerEspacos('  teste \n')).toBe('teste');
  });

  test('Repetir texto', () => {
    expect(utilitarios.repetirTexto('ab', 3)).toBe('ababab');
  });

  test('Juntar array default', () => {
    expect(utilitarios.juntarArray([1,2,3])).toBe('1,2,3');
  });

  test('Juntar array com separador', () => {
    expect(utilitarios.juntarArray(['a','b','c'], '-')).toBe('a-b-c');
  });

  test('Contar palavras', () => {
    expect(utilitarios.contarPalavras('  um   dois   tres ')).toBe(3);
  });

  test('Média array', () => {
    expect(utilitarios.mediaArray([2,4,6,8])).toBe(5);
  });

  test('Média array vazio', () => {
    expect(utilitarios.mediaArray([])).toBe(0);
  });

  test('Remover duplicados', () => {
    expect(utilitarios.removerDuplicados([1,2,2,3,1])).toEqual([1,2,3]);
  });

  test('É palíndromo', () => {
    expect(utilitarios.ehPalindromo('Ame a ema')).toBe(true);
  });

  test('Não é palíndromo', () => {
    expect(utilitarios.ehPalindromo('Teste')).toBe(false);
  });

  test('Mesclar objetos', () => {
    expect(utilitarios.mesclarObjetos({a:1, b:2}, {b:3, c:4})).toEqual({a:1, b:3, c:4});
  });
});