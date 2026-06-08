const test = require('node:test');
const assert = require('node:assert/strict');

const {add} = require('./atividade');//caminho da atividade a ser corrigida por esse arquivo em especifico
//const{funçãoDeResposta} = require(./arquivoDaResposta)

test('atividade 16 - funções (facil)', async (t) => {
   
 await t.test('soma dois números', () => {
    const soma5 = add(5);
    assert.strictEqual(soma5(3), 8);
  });

  await t.test('aceita strings numéricas', () => {
    const soma10 = add('10');
    assert.strictEqual(soma10('2'), 12);
  });

  await t.test('aceita número e string numérica', () => {
    const soma7 = add(7);
    assert.strictEqual(soma7('3'), 10);
  });

  await t.test('retorna sempre number', () => {
    const soma4 = add('4');
    assert.strictEqual(typeof soma4('6'), 'number');
  });

  await t.test('lança TypeError quando a for inválido', () => {
    assert.throws(() => {
      add('abc');
    }, TypeError);
  });

  await t.test('lança TypeError quando b for inválido', () => {
    const soma2 = add(2);

    assert.throws(() => {
      soma2('xyz');
    }, TypeError);
  });

  await t.test('lança TypeError quando a e b forem inválidos', () => {
    assert.throws(() => {
      add(null);
    }, TypeError);
  });






  

});