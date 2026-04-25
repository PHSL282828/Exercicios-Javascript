const test = require('node:test');
const assert = require('node:assert/strict');

const { extractEmails } = require('./atividade');//caminho da atividade a ser corrigida por esse arquivo em especifico
//const{funçãoDeResposta} = require(./arquivoDaResposta)

test('atividade 21 - strings (DIFICIL)', async (t) => {
   await t.test('extrai um único e-mail', () => {
    assert.deepStrictEqual(
      extractEmails('Meu e-mail é teste@email.com'),
      ['teste@email.com']
    );
  });

  await t.test('extrai vários e-mails', () => {
    assert.deepStrictEqual(
      extractEmails('Contatos: ana@email.com e pedro@email.com'),
      ['ana@email.com', 'pedro@email.com']
    );
  });

  await t.test('normaliza e-mails para minúsculas', () => {
    assert.deepStrictEqual(
      extractEmails('Fale com TESTE@EMAIL.COM e ANA@Exemplo.COM'),
      ['teste@email.com', 'ana@exemplo.com']
    );
  });

  await t.test('remove duplicados preservando a ordem de aparição', () => {
    assert.deepStrictEqual(
      extractEmails('a@a.com b@b.com a@a.com B@B.com'),
      ['a@a.com', 'b@b.com']
    );
  });

  await t.test('remove pontuação final acidental', () => {
    assert.deepStrictEqual(
      extractEmails('Envie para teste@email.com, ana@email.com; e pedro@email.com.'),
      ['teste@email.com', 'ana@email.com', 'pedro@email.com']
    );
  });

  await t.test('retorna array vazio quando não houver e-mails', () => {
    assert.deepStrictEqual(
      extractEmails('Não há contatos aqui'),
      []
    );
  });

  await t.test('preserva ordem de aparição mesmo com repetidos', () => {
    assert.deepStrictEqual(
      extractEmails('z@z.com a@a.com z@z.com b@b.com'),
      ['z@z.com', 'a@a.com', 'b@b.com']
    );
  });

  await t.test('aceita e-mails com pontos e sublinhado', () => {
    assert.deepStrictEqual(
      extractEmails('Contato: nome.sobrenome_1@dominio.com.br'),
      ['nome.sobrenome_1@dominio.com.br']
    );
  });

  await t.test('lança TypeError quando text não for string', () => {
    assert.throws(() => {
      extractEmails(123);
    }, TypeError);
  });

  await t.test('lança TypeError quando text for null', () => {
    assert.throws(() => {
      extractEmails(null);
    }, TypeError);
  });

  await t.test('lança TypeError quando text for undefined', () => {
    assert.throws(() => {
      extractEmails(undefined);
    }, TypeError);
  });
  });
  
