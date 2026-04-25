const test = require('node:test');
const assert = require('node:assert/strict');

const { merge } = require('./atividade');//caminho da atividade a ser corrigida por esse arquivo em especifico
//const{funçãoDeResposta} = require(./arquivoDaResposta)

test('atividade 23 - objetos (médio)', async (t) => {
   await t.test('junta as chaves de a e b em um novo objeto', () => {
    assert.deepStrictEqual(
      merge({ a: 1, b: 2 }, { c: 3, d: 4 }),
      { a: 1, b: 2, c: 3, d: 4 }
    );
  });

  await t.test('b sobrescreve a quando a chave for igual', () => {
    assert.deepStrictEqual(
      merge({ a: 1, b: 2 }, { b: 9, c: 3 }),
      { a: 1, b: 9, c: 3 }
    );
  });

  await t.test('não modifica o objeto a', () => {
    const a = { x: 1, y: 2 };
    const b = { y: 3 };

    merge(a, b);

    assert.deepStrictEqual(a, { x: 1, y: 2 });
  });

  await t.test('não modifica o objeto b', () => {
    const a = { x: 1 };
    const b = { y: 2, z: 3 };

    merge(a, b);

    assert.deepStrictEqual(b, { y: 2, z: 3 });
  });

  await t.test('retorna um novo objeto', () => {
    const a = { a: 1 };
    const b = { b: 2 };
    const resultado = merge(a, b);

    assert.notStrictEqual(resultado, a);
    assert.notStrictEqual(resultado, b);
  });

  await t.test('faz cópia rasa: objetos internos permanecem por referência', () => {
    const interno = { valor: 10 };
    const resultado = merge({ obj: interno }, {});

    assert.strictEqual(resultado.obj, interno);
  });

  await t.test('faz cópia rasa também quando b sobrescreve com objeto interno', () => {
    const interno = { valor: 20 };
    const resultado = merge({ obj: { valor: 1 } }, { obj: interno });

    assert.strictEqual(resultado.obj, interno);
  });

  await t.test('funciona com objetos vazios', () => {
    assert.deepStrictEqual(
      merge({}, {}),
      {}
    );
  });

  await t.test('lança TypeError quando a for null', () => {
    assert.throws(() => {
      merge(null, {});
    }, TypeError);
  });

  await t.test('lança TypeError quando b for null', () => {
    assert.throws(() => {
      merge({}, null);
    }, TypeError);
  });

  await t.test('lança TypeError quando a não for objeto', () => {
    assert.throws(() => {
      merge(123, {});
    }, TypeError);
  });

  await t.test('lança TypeError quando b não for objeto', () => {
    assert.throws(() => {
      merge({}, 'abc');
    }, TypeError);
  });
  });
