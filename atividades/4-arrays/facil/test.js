const test = require('node:test');
const assert = require('node:assert/strict');

const { onlyEvens } = require('./atividade');//caminho da atividade a ser corrigida por esse arquivo em especifico
//const{funçãoDeResposta} = require(./arquivoDaResposta)

test('atividade 10 - arrays (facil)', async (t) => {
  await t.test('[2,2,a,a]', () => {
    assert.deepStrictEqual(onlyEvens([2,2,a,a]), [2,2] );
  });

  await t.test('[1,5,6,8,12,b]', () => {
    assert.deepStrictEqual(onlyEvens([1,5,6,8,12,b]), [6,8,12] );
  });


  await t.test('[a,a,a,a,a]', () => {
    assert.deepStrictEqual(onlyEvens([a,a,a,a,a]), [] );
  });

  await t.test('[1,2,3,4]', () => {
    assert.deepStrictEqual(onlyEvens([1,2,3,4]), [2,4] );
  });





  

});