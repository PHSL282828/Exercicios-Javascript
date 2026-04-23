const test = require('node:test');
const assert = require('node:assert/strict');

const { soma } = require('./att1');//caminho da atividade a ser corrigida por esse arquivo em especifico
//const{funçãoDeResposta} = require(./arquivoDaResposta)

test('atividade 01 - soma', async (t) => {
  await t.test('2 + 3 = 5', () => {
    assert.equal(soma(2, 3), 5);
  });
  

  await t.test('10 + 0 = 10', () => {
    assert.equal(soma(10, 0), 10);
  });

  await t.test('-1 + 1 = 0', () => {
    assert.equal(soma(-1, 1), 0);
  });
});

//o que ta entre parenteses é o que vai ser printado na tela
//o assert.equal fala que -> assert.equal(funcaoDoTrainee, resultadoEsperado)
//se cria um await t.test pra cada um