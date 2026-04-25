const test = require('node:test');
const assert = require('node:assert/strict');

const { toFahrenheit, toCelsius } = require('./atividade');//caminho da atividade a ser corrigida por esse arquivo em especifico
//const{funçãoDeResposta} = require(./arquivoDaResposta)

test('atividade 02 - introdução a variaveis (médio)', async (t) => {
  await t.test('0°C ->32°F', () => {
    assert.equal(toFahrenheit(0), 32 );
  });

   await t.test('32°F ->0°C', () => {
    assert.equal(toFahrenheit(32), 0 );
  });

   await t.test('30°C ->82°F', () => {
    assert.equal(toFahrenheit(30), 82 );
  });

   await t.test('82°F ->30°C', () => {
    assert.equal(toFahrenheit(0), 32 );
  });

   await t.test('59°C ->138.2°F', () => {
    assert.equal(toFahrenheit(59), 138.2 );
  });

   await t.test('23°F ->-5°C', () => {
    assert.equal(toCelsius(23), -5 );
  });

   await t.test('-5°C ->23°F', () => {
    assert.equal(toFahrenheit(0), 32 );
  });

  
  

});