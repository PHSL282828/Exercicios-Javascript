const test = require('node:test');
const assert = require('node:assert/strict');

const { compareSemver } = require('./atividade');//caminho da atividade a ser corrigida por esse arquivo em especifico
//const{funçãoDeResposta} = require(./arquivoDaResposta)

test('atividade 14 - operadores (médio)', async (t) => {
  await t.test('retorna 0 para versões iguais', () => {
    assert.strictEqual(compareSemver('1.2.3', '1.2.3'), 0);
  });

  await t.test('retorna -1 quando a < b', () => {
    assert.strictEqual(compareSemver('1.2.3', '1.2.4'), -1);
  });

  await t.test('retorna 1 quando a > b', () => {
    assert.strictEqual(compareSemver('1.10.2', '1.2.9'), 1);
  });

  await t.test('considera partes faltantes como 0', () => {
    assert.strictEqual(compareSemver('1.2', '1.2.0'), 0);
  });

  await t.test('considera partes faltantes como 0 quando a é menor', () => {
    assert.strictEqual(compareSemver('1.0', '1.0.1'), -1);
  });

  await t.test('lança TypeError quando há letra', () => {
    assert.throws(() => {
      compareSemver('1.a.0', '1.0.0');
    }, TypeError);
  });

  await t.test('lança TypeError quando há número negativo', () => {
    assert.throws(() => {
      compareSemver('1.-2.3', '1.2.3');
    }, TypeError);
  });

  await t.test('lança TypeError quando há parte vazia', () => {
    assert.throws(() => {
      compareSemver('1..3', '1.0.3');
    }, TypeError);
  });
});