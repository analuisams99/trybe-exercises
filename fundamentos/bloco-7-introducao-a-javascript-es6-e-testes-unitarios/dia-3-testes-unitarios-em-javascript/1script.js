const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
}

assert.strictEqual(sum(4, 5), 9, 'A soma de 4 mais 5 deve ser 9');
assert.strictEqual(sum(0, 0), 0, 'A soma de 0 mais 0 deve ser 0');
assert.throws(() => sum(4, '5'), 'Você deve lançar um erro quando um dos parametro for uma string');
assert.throws(() => sum(4,'5'), {
  message: 'parameters must be numbers'
}, 'Certifique-se da mensagem de erro ser parameters must be numbers');
