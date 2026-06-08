const test = require('node:test');
const assert = require('node:assert/strict');

const { evalExpr } = require('./atividade');//caminho da atividade a ser corrigida por esse arquivo em especifico
//const{funçãoDeResposta} = require(./arquivoDaResposta)

test('atividade 15 - operadores (DIFICIL)', async (t) => {
   await t.test('avalia soma simples', () => {
    assert.strictEqual(evalExpr('2+3'), 5);
  });

  await t.test('respeita precedência de multiplicação sobre soma', () => {
    assert.strictEqual(evalExpr('2+3*4'), 14);
  });

  await t.test('respeita parênteses', () => {
    assert.strictEqual(evalExpr('(2+3)*4'), 20);
  });

  await t.test('avalia expressão com decimais', () => {
    assert.strictEqual(evalExpr('7/2'), 3.5);
  });

  await t.test('avalia expressão mais completa', () => {
    assert.strictEqual(evalExpr('10-(2+3)*2'), 0);
  });

  await t.test('lança Error em divisão por zero', () => {
    assert.throws(() => {
      evalExpr('10/0');
    }, Error);
  });

  await t.test('lança Error para parênteses desbalanceados', () => {
    assert.throws(() => {
      evalExpr('(2+3');
    }, Error);
  });

  await t.test('lança Error para token inválido', () => {
    assert.throws(() => {
      evalExpr('2+a');
    }, Error);
  });

  await t.test('lança Error para expressão inválida', () => {
    assert.throws(() => {
      evalExpr('2++3');
    }, Error);
  });

  

});