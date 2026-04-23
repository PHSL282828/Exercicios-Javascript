const test = require('node:test');
const assert = require('node:assert/strict');

const { multi } = require('./att2');//caminho da atividade a ser corrigida por esse arquivo em especifico
//const{funçãoDeResposta} = require(./arquivoDaResposta)

test('atividade 02 - multi', async (t) => {
  await t.test('2 * 3 = 6', () => {
    assert.equal(multi(2, 3), 6);
  });
  

  await t.test('10 * 0 = 0', () => {
    assert.equal(multi(10, 0), 0);
  });

  await t.test('-1 * 1 = -1', () => {
    assert.equal(multi(-1, 1), -1);
  });
});

//o que ta entre parenteses é o que vai ser printado na tela
//o assert.equal fala que -> assert.equal(funcaoDoTrainee, resultadoEsperado)
//se cria um await t.test pra cada um