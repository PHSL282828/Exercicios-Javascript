const test = require('node:test');
const assert = require('node:assert/strict');

const {reverse} = require('./atividade');//caminho da atividade a ser corrigida por esse arquivo em especifico
//const{funçãoDeResposta} = require(./arquivoDaResposta)

test('atividade 22 objetos (facil)', async (t) => {
   
 await t.test('conta propriedades próprias enumeráveis', () => {
    assert.strictEqual(
      countKeys({ a: 1, b: 2, c: 3 }),
      3
    );
  });

  await t.test('retorna 0 para objeto vazio', () => {
    assert.strictEqual(
      countKeys({}),
      0
    );
  });

  await t.test('não conta propriedades herdadas do protótipo', () => {
    const proto = { herdada: 1 };
    const obj = Object.create(proto);
    obj.propria = 2;

    assert.strictEqual(
      countKeys(obj),
      1
    );
  });

  await t.test('não conta propriedades não enumeráveis', () => {
    const obj = { a: 1 };
    Object.defineProperty(obj, 'oculta', {
      value: 2,
      enumerable: false
    });

    assert.strictEqual(
      countKeys(obj),
      1
    );
  });

  await t.test('não conta símbolos', () => {
    const s = Symbol('id');
    const obj = { a: 1, b: 2 };
    obj[s] = 3;

    assert.strictEqual(
      countKeys(obj),
      2
    );
  });

  await t.test('lança TypeError quando recebe null', () => {
    assert.throws(() => {
      countKeys(null);
    }, TypeError);
  });

  await t.test('lança TypeError quando recebe undefined', () => {
    assert.throws(() => {
      countKeys(undefined);
    }, TypeError);
  });

  await t.test('lança TypeError quando recebe número', () => {
    assert.throws(() => {
      countKeys(123);
    }, TypeError);
  });
  

});