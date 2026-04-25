const test = require('node:test');
const assert = require('node:assert/strict');

const { classifyAge } = require('./atividade');//caminho da atividade a ser corrigida por esse arquivo em especifico
//const{funçãoDeResposta} = require(./arquivoDaResposta)

test('atividade 4 - condicional (facil)', async (t) => {
  await t.test('80', () => {
    assert.equal(classifyAge(80), "idoso");
  });

  await t.test('-1', () => {
    assert.throws(classifyAge(-1), RangeError);
  });

  await t.test('10', () => {
    assert.equal(classifyAge(80), "crianca");
  });

  await t.test('13', () => {
    assert.equal(classifyAge("13"), "adolescente");
  });

  await t.test('21', () => {
    assert.equal(classifyAge("80"), "adulto");
  });

  await t.test('aaaa', () => {
    assert.throws(classifyAge(aaaa), TypeError);
  });






  

});