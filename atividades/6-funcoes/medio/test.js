const test = require('node:test');
const assert = require('node:assert/strict');

const { memo } = require('./atividade');//caminho da atividade a ser corrigida por esse arquivo em especifico
//const{funçãoDeResposta} = require(./arquivoDaResposta)

test('atividade 17 - funcoes (médio)', async (t) => {
   assert.throws(() => {
      memo(123);
    }, TypeError);
  });

  await t.test('memoriza resultado para mesmos argumentos', () => {
    let chamadas = 0;

    const soma = memo((a, b) => {
      chamadas++;
      return a + b;
    });

    assert.strictEqual(soma(2, 3), 5);
    assert.strictEqual(soma(2, 3), 5);
    assert.strictEqual(chamadas, 1);
  });

  await t.test('chama novamente para argumentos diferentes', () => {
    let chamadas = 0;

    const soma = memo((a, b) => {
      chamadas++;
      return a + b;
    });

    assert.strictEqual(soma(2, 3), 5);
    assert.strictEqual(soma(3, 4), 7);
    assert.strictEqual(chamadas, 2);
  });

  await t.test('usa JSON.stringify(args) como chave do cache', () => {
    let chamadas = 0;

    const fn = memo((obj) => {
      chamadas++;
      return obj.x * 2;
    });

    assert.strictEqual(fn({ x: 2 }), 4);
    assert.strictEqual(fn({ x: 2 }), 4);
    assert.strictEqual(chamadas, 1);
  });

  await t.test('preserva o this da função original', () => {
    const obj = {
      fator: 10,
      mult: memo(function (n) {
        return this.fator * n;
      })
    };

    assert.strictEqual(obj.mult(2), 20);
  });

  await t.test('faz fallback sem cache quando JSON.stringify falha', () => {
    let chamadas = 0;

    const fn = memo((obj) => {
      chamadas++;
      return 42;
    });

    const circular = {};
    circular.self = circular;

    assert.strictEqual(fn(circular), 42);
    assert.strictEqual(fn(circular), 42);
    assert.strictEqual(chamadas, 2);
  });
