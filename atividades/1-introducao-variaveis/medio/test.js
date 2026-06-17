const test = require('node:test');
const assert = require('node:assert/strict');

const { toFahrenheit, toCelsius } = require('./atividade');//caminho da atividade a ser corrigida por esse arquivo em especifico
//const{funçãoDeResposta} = require(./arquivoDaResposta)

test('atividade 02 - introdução a variaveis (médio)', async (t) => {
   await t.test('0°C -> 32°F', () => {
    assert.equal(toFahrenheit(0), 32);
  });

  await t.test('32°F -> 0°C', () => {
    assert.equal(toCelsius(32), 0);
  });

  await t.test('30°C -> 86°F', () => {
    assert.equal(toFahrenheit(30), 86);
  });

  await t.test('86°F -> 30°C', () => {
    assert.equal(toCelsius(86), 30);
  });

  await t.test('59°C -> 138.2°F', () => {
    assert.equal(toFahrenheit(59), 138.2);
  });

  await t.test('23°F -> -5°C', () => {
    assert.equal(toCelsius(23), -5);
  });

  await t.test('-5°C -> 23°F', () => {
    assert.equal(toFahrenheit(-5), 23);
  });

  await t.test('100°C -> 212°F', () => {
    assert.equal(toFahrenheit(100), 212);
  });

  await t.test('212°F -> 100°C', () => {
    assert.equal(toCelsius(212), 100);
  });

});