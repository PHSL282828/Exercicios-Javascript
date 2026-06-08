const test = require('node:test');
const assert = require('node:assert/strict');

const { energyBill } = require('./atividade');//caminho da atividade a ser corrigida por esse arquivo em especifico
//const{funçãoDeResposta} = require(./arquivoDaResposta)

test('atividade 5 - condicional (médio)', async (t) => {
  await t.test('110', () => {
    assert.equal(energyBill("110"),57.50 );
  });

  await t.test('51', () => {
    assert.equal(energyBill(51),25.50 );
  });

  await t.test('100', () => {
    assert.equal(energyBill("110"),50.00 );
  });

  await t.test('110', () => {
    assert.equal(energyBill("110"),55.00 );
  });
  
  await t.test('-1', () => {
    assert.throws(energyBill("-1"),RangeError);
  });

  await t.test('aa', () => {
    assert.throws(energyBill(aa),TypeError );
  });

  await t.test('250', () => {
    assert.equal(energyBill(250),185.00 );
  });



  







  

});