const test = require('node:test');
const assert = require('node:assert/strict');

const { slugify } = require('./atividade');//caminho da atividade a ser corrigida por esse arquivo em especifico
//const{funçãoDeResposta} = require(./arquivoDaResposta)

test('atividade 20 strings (médio)', async (t) => {
   await t.test('transforma em minúsculas', () => {
    assert.strictEqual(slugify('Ola Mundo'), 'ola-mundo');
  });

  await t.test('remove acentos', () => {
    assert.strictEqual(slugify('ação rápida'), 'acao-rapida');
  });

  await t.test('troca espaços por hífen', () => {
    assert.strictEqual(slugify('teste de slug'), 'teste-de-slug');
  });

  await t.test('colapsa múltiplos separadores', () => {
    assert.strictEqual(slugify('teste---de___slug'), 'teste-de-slug');
  });

  await t.test('remove caracteres inválidos', () => {
    assert.strictEqual(slugify('Olá, mundo! #2026'), 'ola-mundo-2026');
  });

  await t.test('remove hífens das pontas', () => {
    assert.strictEqual(slugify('---Olá Mundo---'), 'ola-mundo');
  });

  await t.test('mantém letras e números', () => {
    assert.strictEqual(slugify('Produto X123'), 'produto-x123');
  });

  await t.test('retorna vazio se não sobrar nada válido', () => {
    assert.strictEqual(slugify('!!!@@@###'), '');
  });

  await t.test('funciona com string já pronta', () => {
    assert.strictEqual(slugify('meu-slug-pronto'), 'meu-slug-pronto');
  });

  await t.test('colapsa espaços e símbolos misturados', () => {
    assert.strictEqual(slugify('  Olá --- mundo___teste  '), 'ola-mundo-teste');
  });
  });
