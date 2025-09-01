const Utilitarios = require('../src/utilitarios');
const utilitarios = new Utilitarios();

describe('Utilitarios', () => {
  test('Dividir dois valores válidos', () => {
    expect(utilitarios.dividir(20, 10)).toBe(2);
  });

  test('Dividir por zero retorna um erro', () => {
    expect(() => utilitarios.dividir(5, 0)).toThrow('Divisão por zero');
  });

  test('Inverter String', () => {
    expect(utilitarios.inverterString('hello')).toBe('olleh');
  });

  test('Contar caracteres de um texto', () => {
    expect(utilitarios.contarCaracteres('hello')).toBe(5);
  });

  test('Transforma letras em maisculas', () => {
    expect(utilitarios.paraMaiusculas('abC')).toBe('ABC');
  });

  test('Tranformar texto para letras minúsculas', () => {
    expect(utilitarios.paraMinusculas('AbC')).toBe('abc');
  });

  test('Torna primeira letra maiscula', () => {
    expect(utilitarios.primeiraLetraMaiuscula('texto')).toBe('Texto');
  });

  test('Soma de dois valores', () => {
    expect(utilitarios.somar(3, 4)).toBe(7);
  });

  test('Subtração de dois valores', () => {
    expect(utilitarios.subtrair(10, 4)).toBe(6);
  });

  test('Multiplicação de dois valores', () => {
    expect(utilitarios.multiplicar(3, 5)).toBe(15);
  });

  test('Verificação de numero par (Para verdadeiro)', () => {
    expect(utilitarios.ehPar(8)).toBe(true);
  });

  test('Verificação de numero par (Para negativo)', () => {
    expect(utilitarios.ehPar(7)).toBe(false);
  });

  test('Retorna valor do primeiro elemento de um array', () => {
    expect(utilitarios.primeiroElemento([9, 8, 7])).toBe(9);
  });

  test('Retorna valor do ultimo elemento de um array', () => {
    expect(utilitarios.ultimoElemento([9, 8, 7])).toBe(7);
  });

  test('Retorna o tamanho total de um array', () => {
    expect(utilitarios.tamanhoArray([1,2,3,4])).toBe(4);
  });

  test('Inverter array sem alterar original', () => {
    const arr = ['c','a','b'];
    const ordenado = utilitarios.ordenarArray(arr);
    expect(ordenado).toEqual(['a','b','c']);
    expect(arr).toEqual(['c','a','b']);
  });

  test('Inverter array sem alterar original', () => {
    const arr = [1,2,3];
    const invertido = utilitarios.inverterArray(arr);
    expect(invertido).toEqual([3,2,1]);
    expect(arr).toEqual([1,2,3]);
  });

  test('Gerar número aleatório (Numero randomizado MOCKADO)', () => {
    const original = Math.random;
    Math.random = () => 0.5;
    expect(utilitarios.gerarNumeroAleatorio(100)).toBe(50);
    Math.random = original;
  });

  test('Verificador se variável é numero (Verdadeiro)', () => {
    expect(utilitarios.ehNumero(10)).toBe(true);
  });

  test('Verificador se variavel é numero (Passando letra)', () => {
    expect(utilitarios.ehNumero(Number('x'))).toBe(false);
  });

  test('Verificador se variavel é numero (Passando string de numeros)', () => {
    expect(utilitarios.ehNumero('10')).toBe(false);
  });

  test('Remoção de espaços de texto', () => {
    expect(utilitarios.removerEspacos('  teste \n')).toBe('teste');
  });

  test('Repetidor de texto', () => {
    expect(utilitarios.repetirTexto('ab', 3)).toBe('ababab');
  });

  test('Juntar array transformando em string', () => {
    expect(utilitarios.juntarArray([1,2,3])).toBe('1,2,3');
  });

  test('Juntar array transformando em string com separador', () => {
    expect(utilitarios.juntarArray(['a','b','c'], '-')).toBe('a-b-c');
  });

  test('Contagem de palavras em um texto', () => {
    expect(utilitarios.contarPalavras('  um   dois   tres ')).toBe(3);
  });

  test('Realiza o calculo da media dos valores de um array', () => {
    expect(utilitarios.mediaArray([2,4,6,8])).toBe(5);
  });

  test('Remove valores duplicados de um array', () => {
    expect(utilitarios.removerDuplicados([1,2,2,3,1])).toEqual([1,2,3]);
  });

  test('Verifica se duas palavras são um palindromo', () => {
    expect(utilitarios.ehPalindromo('Ame a ema')).toBe(true);
  });

  test('Mesclar dois objetos e suas classes', () => {
    expect(utilitarios.mesclarObjetos({a:1, b:2}, {b:3, c:4})).toEqual({a:1, b:3, c:4});
  });
});