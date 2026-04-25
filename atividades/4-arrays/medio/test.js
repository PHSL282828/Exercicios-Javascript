const test = require('node:test');
const assert = require('node:assert/strict');

const { groupBy } = require('./atividade');//caminho da atividade a ser corrigida por esse arquivo em especifico
//const{funçãoDeResposta} = require(./arquivoDaResposta)

test('atividade 11 - array (médio)', async (t) => {
  await t.test('agrupa objetos pela propriedade categoria', () => {
  assert.deepStrictEqual(
    groupBy([
      { nome: 'Mouse', categoria: 'informática' },
      { nome: 'Teclado', categoria: 'informática' },
      { nome: 'Cadeira', categoria: 'móveis' }
    ], 'categoria'),
    {
      informática: [
        { nome: 'Mouse', categoria: 'informática' },
        { nome: 'Teclado', categoria: 'informática' }
      ],
      móveis: [
        { nome: 'Cadeira', categoria: 'móveis' }
      ]
    }
  );
});

await t.test('agrupa objetos pela propriedade cidade', () => {
  assert.deepStrictEqual(
    groupBy([
      { nome: 'Ana', cidade: 'BH' },
      { nome: 'Pedro', cidade: 'SP' },
      { nome: 'João', cidade: 'BH' },
      { nome: 'Marina', cidade: 'RJ' }
    ], 'cidade'),
    {
      BH: [
        { nome: 'Ana', cidade: 'BH' },
        { nome: 'João', cidade: 'BH' }
      ],
      SP: [
        { nome: 'Pedro', cidade: 'SP' }
      ],
      RJ: [
        { nome: 'Marina', cidade: 'RJ' }
      ]
    }
  );
});

await t.test('agrupa quando só existe um item', () => {
  assert.deepStrictEqual(
    groupBy([
      { nome: 'Ana', setor: 'financeiro' }
    ], 'setor'),
    {
      financeiro: [
        { nome: 'Ana', setor: 'financeiro' }
      ]
    }
  );
});

await t.test('retorna objeto vazio quando array estiver vazio', () => {
  assert.deepStrictEqual(
    groupBy([], 'categoria'),
    {}
  );
});

await t.test('agrupa valores undefined na chave undefined', () => {
  assert.deepStrictEqual(
    groupBy([
      { nome: 'Ana', setor: undefined },
      { nome: 'Pedro', setor: 'TI' },
      { nome: 'João', setor: undefined }
    ], 'setor'),
    {
      undefined: [
        { nome: 'Ana', setor: undefined },
        { nome: 'João', setor: undefined }
      ],
      TI: [
        { nome: 'Pedro', setor: 'TI' }
      ]
    }
  );
});

await t.test('agrupa valores null na chave null', () => {
  assert.deepStrictEqual(
    groupBy([
      { nome: 'Ana', setor: null },
      { nome: 'Pedro', setor: 'RH' },
      { nome: 'João', setor: null }
    ], 'setor'),
    {
      null: [
        { nome: 'Ana', setor: null },
        { nome: 'João', setor: null }
      ],
      RH: [
        { nome: 'Pedro', setor: 'RH' }
      ]
    }
  );
});

await t.test('agrupa null e undefined separadamente', () => {
  assert.deepStrictEqual(
    groupBy([
      { nome: 'Ana', status: null },
      { nome: 'Pedro', status: undefined },
      { nome: 'João', status: 'ativo' },
      { nome: 'Maria', status: null },
      { nome: 'Carlos', status: undefined }
    ], 'status'),
    {
      null: [
        { nome: 'Ana', status: null },
        { nome: 'Maria', status: null }
      ],
      undefined: [
        { nome: 'Pedro', status: undefined },
        { nome: 'Carlos', status: undefined }
      ],
      ativo: [
        { nome: 'João', status: 'ativo' }
      ]
    }
  );
});

await t.test('agrupa quando alguns objetos não possuem a propriedade', () => {
  assert.deepStrictEqual(
    groupBy([
      { nome: 'Ana', cargo: 'dev' },
      { nome: 'Pedro' },
      { nome: 'João', cargo: 'dev' },
      { nome: 'Marina' }
    ], 'cargo'),
    {
      dev: [
        { nome: 'Ana', cargo: 'dev' },
        { nome: 'João', cargo: 'dev' }
      ],
      undefined: [
        { nome: 'Pedro' },
        { nome: 'Marina' }
      ]
    }
  );
});

await t.test('agrupa números como chave', () => {
  assert.deepStrictEqual(
    groupBy([
      { nome: 'Ana', idade: 20 },
      { nome: 'Pedro', idade: 21 },
      { nome: 'João', idade: 20 }
    ], 'idade'),
    {
      20: [
        { nome: 'Ana', idade: 20 },
        { nome: 'João', idade: 20 }
      ],
      21: [
        { nome: 'Pedro', idade: 21 }
      ]
    }
  );
});

await t.test('agrupa strings vazias como chave', () => {
  assert.deepStrictEqual(
    groupBy([
      { nome: 'Ana', grupo: '' },
      { nome: 'Pedro', grupo: 'A' },
      { nome: 'João', grupo: '' }
    ], 'grupo'),
    {
      '': [
        { nome: 'Ana', grupo: '' },
        { nome: 'João', grupo: '' }
      ],
      A: [
        { nome: 'Pedro', grupo: 'A' }
      ]
    }
  );
});

  

});