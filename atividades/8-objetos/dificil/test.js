const test = require('node:test');
const assert = require('node:assert/strict');

const { deepGet } = require('./atividade');//caminho da atividade a ser corrigida por esse arquivo em especifico
//const{funçãoDeResposta} = require(./arquivoDaResposta)

test('atividade 24 - objetos (DIFICIL)', async (t) => {
   await t.test('retorna valor em caminho simples com pontos', () => {
    assert.strictEqual(
      deepGet({ a: { b: { c: 10 } } }, 'a.b.c'),
      10
    );
  });

  await t.test('retorna valor usando índice de array', () => {
    assert.strictEqual(
      deepGet({ a: { b: [5, 8, 12] } }, 'a.b[1]'),
      8
    );
  });

  await t.test('retorna valor em caminho misto com ponto e colchetes', () => {
    assert.strictEqual(
      deepGet({ a: { b: [{ c: 42 }] } }, 'a.b[0].c'),
      42
    );
  });

  await t.test('retorna undefined se alguma chave não existir', () => {
    assert.strictEqual(
      deepGet({ a: { b: 1 } }, 'a.c'),
      undefined
    );
  });

  await t.test('retorna undefined se índice não existir', () => {
    assert.strictEqual(
      deepGet({ a: [1, 2] }, 'a[5]'),
      undefined
    );
  });

  await t.test('retorna undefined se tentar continuar após undefined', () => {
    assert.strictEqual(
      deepGet({ a: {} }, 'a.b.c'),
      undefined
    );
  });

  await t.test('retorna o próprio objeto quando path for vazio', () => {
    const obj = { a: 1 };
    assert.strictEqual(deepGet(obj, ''), obj);
  });

  await t.test('não modifica o objeto original', () => {
    const obj = { a: { b: [{ c: 7 }] } };
    const copia = JSON.parse(JSON.stringify(obj));

    deepGet(obj, 'a.b[0].c');

    assert.deepStrictEqual(obj, copia);
  });

  await t.test('funciona com chave contendo número e underline', () => {
    assert.strictEqual(
      deepGet({ a_1: { b2: 9 } }, 'a_1.b2'),
      9
    );
  });

  await t.test('retorna undefined quando atual virar null no meio do caminho', () => {
    assert.strictEqual(
      deepGet({ a: null }, 'a.b'),
      undefined
    );
  });

  await t.test('lança TypeError quando obj for null', () => {
    assert.throws(() => {
      deepGet(null, 'a.b');
    }, TypeError);
  });

  await t.test('lança TypeError quando obj não for objeto', () => {
    assert.throws(() => {
      deepGet(123, 'a.b');
    }, TypeError);
  });
  });
  
