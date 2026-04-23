const test = require('node:test');
const assert = require('node:assert/strict');

const { normalizeUser } = require('./atividade');//caminho da atividade a ser corrigida por esse arquivo em especifico
//const{funçãoDeResposta} = require(./arquivoDaResposta)

test('atividade 03 - introdução a variaveis (DIFÍCIL)', async (t) => {
  await t.test('{"  pedro", emAil@eMail.com, 21 }', () => {
    assert.deepStrictEqual(normalizeUser({
      name:"  pedro",
      email:"emAil@email.com",
      age:21
    }), {
      name:"Pedro",
      email:"email@email.com",
      age:21,
    } );
  });

  await t.test('{  maria  , maria@email.com, 30}', () => {
    assert.deepStrictEqual(
      normalizeUser({
        name: '   maria   ',
        email: 'maria@email.com',
        age: 30
      }),
      {
        name: 'Maria',
        email: 'maria@email.com',
        age: 30
      }
    );
  });

  await t.test('{joao,JOAO@EMAIL.COM,18}', () => {
    assert.deepStrictEqual(
      normalizeUser({
        name: 'joao',
        email: 'JOAO@EMAIL.COM',
        age: 18
      }),
      {
        name: 'Joao',
        email: 'joao@email.com',
        age: 18
      }
    );
  });

  await t.test('{ana, , 25}', () => {
    assert.deepStrictEqual(
      normalizeUser({
        name: 'ana',
        email: null,
        age: 25
      }),
      {
        name: 'Ana',
        email: null,
        age: 25
      }
    );
  });

  await t.test('carlos, CARLOS@EMAIL.COM, ', () => {
    assert.deepStrictEqual(
      normalizeUser({
        name: 'carlos',
        email: 'CARLOS@EMAIL.COM',
        age: null
      }),
      {
        name: 'Carlos',
        email: 'carlos@email.com',
        age: null
      }
    );
  });

  await t.test('{lucas, , }', () => {
    assert.deepStrictEqual(
      normalizeUser({
        name: 'lucas',
        email: null,
        age: null
      }),
      {
        name: 'Lucas',
        email: null,
        age: null
      }
    );
  });

  
  

});