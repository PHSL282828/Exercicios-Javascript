const test = require('node:test');
const assert = require('node:assert/strict');

const { compose } = require('./atividade');//caminho da atividade a ser corrigida por esse arquivo em especifico
//const{funçãoDeResposta} = require(./arquivoDaResposta)

test('atividade 18 - funcoes (DIFICIL)', async (t) => {
   const dobro = (x) => x * 2;
    const soma3 = (x) => x + 3;
    const menos1 = (x) => x - 1;

    assert.strictEqual(compose(dobro, soma3, menos1)(5), 14);
  });

  await t.test('repassa todos os argumentos apenas para a última função', () => {
    const dobro = (x) => x * 2;
    const soma = (a, b) => a + b;

    assert.strictEqual(compose(dobro, soma)(2, 3), 10);
  });

  await t.test('funções anteriores recebem apenas o acumulado', () => {
    const paraTexto = (x) => `valor:${x}`;
    const soma = (a, b) => a + b;

    assert.strictEqual(compose(paraTexto, soma)(2, 3), 'valor:5');
  });

  await t.test('preserva o this em todas as funções', () => {
    const obj = {
      fator: 10,
      soma(a, b) {
        return (a + b) * this.fator;
      },
      metade(x) {
        return x / 2;
      }
    };

    const fn = compose(obj.metade, obj.soma);
    assert.strictEqual(fn.call(obj, 2, 4), 30);
  });

  await t.test('se nenhuma função for passada, retorna identidade', () => {
    assert.strictEqual(compose()(123), 123);
  });

  await t.test('na identidade, com vários argumentos retorna o primeiro', () => {
    assert.strictEqual(compose()(1, 2, 3), 1);
  });

  await t.test('com uma única função, apenas executa ela', () => {
    const triplo = (x) => x * 3;
    assert.strictEqual(compose(triplo)(4), 12);
  });

  await t.test('lança TypeError se algum elemento não for função', () => {
    assert.throws(() => {
      compose((x) => x + 1, 123, (x) => x * 2);
    }, TypeError);
  });
  
