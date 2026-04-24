const test = require('node:test');
const assert = require('node:assert/strict');

const { flatten1 } = require('./atividade');//caminho da atividade a ser corrigida por esse arquivo em especifico
//const{funçãoDeResposta} = require(./arquivoDaResposta)

test('atividade 05 - introdução a variaveis (médio)', async (t) => {
  await t.test('[1,[2,3,4], [5]]', () => {
    assert.deepStrictEqual(flatten1([1,[2,3,4], [5]]), [1,2,3,4,5] );
  });

  await t.test('[[1],3,[2,3,4], [5]]', () => {
    assert.deepStrictEqual(flatten1([[1],3,[2,3,4], [5]]), [1,2,3,4,5] );
  });

  

});