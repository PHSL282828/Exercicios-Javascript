const test = require('node:test');
const assert = require('node:assert/strict');

const {calc} = require('./atividade');//caminho da atividade a ser corrigida por esse arquivo em especifico
//const{funçãoDeResposta} = require(./arquivoDaResposta)

test('atividade 13 - operadores (facil)', async (t) => {
   await t.test('soma dois números', () => {
    assert.strictEqual(calc(2, 3, '+'), 5);
  });

  await t.test('subtrai dois números', () => {
    assert.strictEqual(calc(10, 4, '-'), 6);
  });

  await t.test('multiplica dois números', () => {
    assert.strictEqual(calc(6, 7, '*'), 42);
  });

  await t.test('divide dois números', () => {
    assert.strictEqual(calc(20, 5, '/'), 4);
  });

  await t.test('converte strings numéricas na soma', () => {
    assert.strictEqual(calc('2', '3', '+'), 5);
  });

  await t.test('converte strings numéricas na subtração', () => {
    assert.strictEqual(calc('10', '4', '-'), 6);
  });

  await t.test('converte strings numéricas na multiplicação', () => {
    assert.strictEqual(calc('6', '7', '*'), 42);
  });

  await t.test('converte strings numéricas na divisão', () => {
    assert.strictEqual(calc('20', '5', '/'), 4);
  });

  await t.test('aceita string com número decimal', () => {
    assert.strictEqual(calc('2.5', '1.5', '+'), 4);
  });

  await t.test('aceita string com espaços', () => {
    assert.strictEqual(calc(' 8 ', ' 2 ', '/'), 4);
  });

  await t.test('retorna null quando divide por zero', () => {
    assert.strictEqual(calc(10, 0, '/'), null);
  });

  await t.test('retorna null quando divide string numérica por zero', () => {
    assert.strictEqual(calc('10', '0', '/'), null);
  });

  await t.test('retorna number como resultado', () => {
    assert.strictEqual(typeof calc(2, 3, '+'), 'number');
  });

  await t.test('lança TypeError quando a não é numérico', () => {
    assert.throws(() => {
      calc('abc', 2, '+');
    }, TypeError);
  });

  await t.test('lança TypeError quando b não é numérico', () => {
    assert.throws(() => {
      calc(2, 'xyz', '+');
    }, TypeError);
  });

  await t.test('lança TypeError quando a e b não são numéricos', () => {
    assert.throws(() => {
      calc('abc', 'xyz', '+');
    }, TypeError);
  });

  await t.test('lança TypeError quando a é undefined', () => {
    assert.throws(() => {
      calc(undefined, 2, '+');
    }, TypeError);
  });

  await t.test('lança TypeError quando b é undefined', () => {
    assert.throws(() => {
      calc(2, undefined, '+');
    }, TypeError);
  });

  await t.test('lança TypeError quando a é NaN após Number()', () => {
    assert.throws(() => {
      calc({}, 2, '+');
    }, TypeError);
  });

  await t.test('lança TypeError quando b é NaN após Number()', () => {
    assert.throws(() => {
      calc(2, {}, '+');
    }, TypeError);
  });







  

});