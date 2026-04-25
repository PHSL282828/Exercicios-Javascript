const test = require('node:test');
const assert = require('node:assert/strict');

const { greet } = require('./atividade');//caminho da atividade a ser corrigida por esse arquivo em especifico
//const{funçãoDeResposta} = require(./arquivoDaResposta)

test('atividade 01 - introdução a variaveis (facil)', async (t) => {
  await t.test('Roberto, 19', () => {
    assert.equal(greet("Roberto",19), `Olá, Roberto! Você tem 19 anos.` );
  });

  await t.test('Lara, 28', () => {
    assert.equal(greet("Lara","28"), `Olá, Lara! Você tem 28 anos.` );
  });
  

});