const test = require('node:test');
const assert = require('node:assert/strict');

const {sortBy} = require('./atividade');//caminho da atividade a ser corrigida por esse arquivo em especifico
//const{funçãoDeResposta} = require(./arquivoDaResposta)

test('atividade 12 arrays(DIFICIL)', async (t) => {

 await t.test('ordena por número ascendente', () => {
    assert.deepStrictEqual(
      sortBy(
        [
          { nome: 'Carlos', idade: 30 },
          { nome: 'Ana', idade: 20 },
          { nome: 'Pedro', idade: 25 }
        ],
        ['idade', 'ascendente']
      ),
      [
        { nome: 'Ana', idade: 20 },
        { nome: 'Pedro', idade: 25 },
        { nome: 'Carlos', idade: 30 }
      ]
    );
  });

  await t.test('ordena por número descendente', () => {
    assert.deepStrictEqual(
      sortBy(
        [
          { nome: 'Carlos', idade: 30 },
          { nome: 'Ana', idade: 20 },
          { nome: 'Pedro', idade: 25 }
        ],
        ['idade', 'descendente']
      ),
      [
        { nome: 'Carlos', idade: 30 },
        { nome: 'Pedro', idade: 25 },
        { nome: 'Ana', idade: 20 }
      ]
    );
  });

  await t.test('ordena por string ascendente', () => {
    assert.deepStrictEqual(
      sortBy(
        [
          { nome: 'Pedro', idade: 25 },
          { nome: 'Ana', idade: 20 },
          { nome: 'Carlos', idade: 30 }
        ],
        ['nome', 'ascendente']
      ),
      [
        { nome: 'Ana', idade: 20 },
        { nome: 'Carlos', idade: 30 },
        { nome: 'Pedro', idade: 25 }
      ]
    );
  });

  await t.test('ordena por string descendente', () => {
    assert.deepStrictEqual(
      sortBy(
        [
          { nome: 'Pedro', idade: 25 },
          { nome: 'Ana', idade: 20 },
          { nome: 'Carlos', idade: 30 }
        ],
        ['nome', 'descendente']
      ),
      [
        { nome: 'Pedro', idade: 25 },
        { nome: 'Carlos', idade: 30 },
        { nome: 'Ana', idade: 20 }
      ]
    );
  });

  await t.test('ordena por múltiplos critérios', () => {
    assert.deepStrictEqual(
      sortBy(
        [
          { nome: 'Pedro', idade: 25, cidade: 'SP' },
          { nome: 'Ana', idade: 25, cidade: 'BH' },
          { nome: 'Carlos', idade: 30, cidade: 'RJ' },
          { nome: 'Bruno', idade: 25, cidade: 'SP' }
        ],
        ['idade', 'ascendente'],
        ['cidade', 'ascendente'],
        ['nome', 'ascendente']
      ),
      [
        { nome: 'Ana', idade: 25, cidade: 'BH' },
        { nome: 'Bruno', idade: 25, cidade: 'SP' },
        { nome: 'Pedro', idade: 25, cidade: 'SP' },
        { nome: 'Carlos', idade: 30, cidade: 'RJ' }
      ]
    );
  });

  await t.test('coloca null no final em ordem ascendente', () => {
    assert.deepStrictEqual(
      sortBy(
        [
          { nome: 'Carlos', idade: null },
          { nome: 'Ana', idade: 20 },
          { nome: 'Pedro', idade: 25 }
        ],
        ['idade', 'ascendente']
      ),
      [
        { nome: 'Ana', idade: 20 },
        { nome: 'Pedro', idade: 25 },
        { nome: 'Carlos', idade: null }
      ]
    );
  });

   await t.test('retorna array vazio quando items for vazio', () => {
    assert.deepStrictEqual(
      sortBy([], ['idade', 'ascendente']),
      []
    );
  });

  await t.test('funciona com apenas um item', () => {
    assert.deepStrictEqual(
      sortBy(
        [{ nome: 'Ana', idade: 20 }],
        ['idade', 'ascendente']
      ),
      [{ nome: 'Ana', idade: 20 }]
    );
  });


  
  

});