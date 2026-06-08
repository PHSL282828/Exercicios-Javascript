const test = require('node:test');
const assert = require('node:assert/strict');

const {reverse} = require('./atividade');//caminho da atividade a ser corrigida por esse arquivo em especifico
//const{funçãoDeResposta} = require(./arquivoDaResposta)

test('atividade 19 - strings (facil)', async (t) => {
   
 await t.test('inverte uma string simples', () => {
    assert.strictEqual(reverse('abc'), 'cba');
  });

  await t.test('retorna string vazia quando receber string vazia', () => {
    assert.strictEqual(reverse(''), '');
  });

  await t.test('funciona com uma única letra', () => {
    assert.strictEqual(reverse('a'), 'a');
  });

  await t.test('inverte string com espaços', () => {
    assert.strictEqual(reverse('ola mundo'), 'odnum alo');
  });

  await t.test('funciona com números em formato string', () => {
    assert.strictEqual(reverse('12345'), '54321');
  });

  await t.test('funciona com acentos e unicode', () => {
    assert.strictEqual(reverse('áéí'), 'íéá');
  });

  await t.test('funciona com emoji sem quebrar caractere', () => {
    assert.strictEqual(reverse('a😊b'), 'b😊a');
  });

  await t.test('lança TypeError quando receber número', () => {
    assert.throws(() => {
      reverse(123);
    }, TypeError);
  });

  await t.test('lança TypeError quando receber null', () => {
    assert.throws(() => {
      reverse(null);
    }, TypeError);
  });

  await t.test('lança TypeError quando receber undefined', () => {
    assert.throws(() => {
      reverse(undefined);
    }, TypeError);
  });
  

});