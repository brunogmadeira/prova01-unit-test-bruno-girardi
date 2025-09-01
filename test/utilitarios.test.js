const Utilitarios = require('../src/utilitarios');

test("Dividir dois valores válidos", async () => {
    expect(dividir(20, 10)).toStrictEqual(2);
  });