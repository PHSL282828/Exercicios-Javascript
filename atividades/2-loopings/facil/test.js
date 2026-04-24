const test = require('node:test');
const assert = require('node:assert/strict');

const { sumArray } = require('./atividade');//caminho da atividade a ser corrigida por esse arquivo em especifico
//const{funçãoDeResposta} = require(./arquivoDaResposta)

test('atividade 04 - loopings (facil)', async (t) => {
  await t.test('[1,2,3,4]', () => {
    assert.equal(sumArray([1,2,3,4]), 10 );
  });

  await t.test('[5,5,5,infinite,infinite]', () => {
    assert.equal(sumArray([5,5,5,Infinity, Infinity]), 15 );
  });

  await t.test('[infinity, infinity, -infinity]', () => {
    assert.equal(sumArray([Infinity, Infinity, -Infinity]), 0 );
  });

  await t.test('[1,1,1,1,1,1,1,1,1,0,1,1,1]', () => {
    assert.equal(sumArray([1,1,1,1,1,1,1,1,1,0,1,1,1]),12  );
  });

  await t.test('[abab,abab,abab]', () => {
    assert.equal(sumArray([abab, abab,abab]), 0 );
  });

    await t.test('[1, a, x]', () => {
    assert.equal(sumArray([1,a,x]), 1 );
  });

  

});