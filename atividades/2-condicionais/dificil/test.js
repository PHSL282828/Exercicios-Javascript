const test = require('node:test');
const assert = require('node:assert/strict');

const { validatePassword } = require('./atividade');//caminho da atividade a ser corrigida por esse arquivo em especifico
const { devNull } = require('node:os');
//const{funçãoDeResposta} = require(./arquivoDaResposta)

test('atividade 6 - condicional (DIFICIL)', async (t) => {
  await t.test('Tudo certo', () => {
    assert.deepStrictEqual(validatePassword("lourojosE4050@"), {
      valid:true,
      reasons:null
    });
  });

  await t.test('retorna válida quando atende todos os critérios', () => {
    assert.deepStrictEqual(
      validatePassword('Abcdef1!'),
      {
        valid: true,
        reasons: null
      }
    );
  });

  await t.test('retorna min_length quando tem menos de 8 caracteres', () => {
    assert.deepStrictEqual(
      validatePassword('Ab1!cd'),
      {
        valid: false,
        reasons: ['min_length']
      }
    );
  });

  await t.test('retorna missing_lowercase quando não tem letra minúscula', () => {
    assert.deepStrictEqual(
      validatePassword('ABCDEF1!'),
      {
        valid: false,
        reasons: ['missing_lowercase']
      }
    );
  });

  await t.test('retorna missing_uppercase quando não tem letra maiúscula', () => {
    assert.deepStrictEqual(
      validatePassword('abcdef1!'),
      {
        valid: false,
        reasons: ['missing_uppercase']
      }
    );
  });

  await t.test('retorna missing_digit quando não tem dígito', () => {
    assert.deepStrictEqual(
      validatePassword('Abcdefg!'),
      {
        valid: false,
        reasons: ['missing_digit']
      }
    );
  });

  await t.test('retorna missing_special quando não tem caractere especial', () => {
    assert.deepStrictEqual(
      validatePassword('Abcdef12'),
      {
        valid: false,
        reasons: ['missing_special']
      }
    );
  });

  await t.test('retorna has_whitespace quando tem espaço em branco', () => {
    assert.deepStrictEqual(
      validatePassword('Abcdef1! '),
      {
        valid: false,
        reasons: ['has_whitespace']
      }
    );
  });

  await t.test('retorna vários motivos quando a senha viola várias regras', () => {
    assert.deepStrictEqual(
      validatePassword('abc'),
      {
        valid: false,
        reasons: [
          'min_length',
          'missing_uppercase',
          'missing_digit',
          'missing_special'
        ]
      }
    );
  });

  await t.test('retorna vários motivos incluindo whitespace', () => {
    assert.deepStrictEqual(
      validatePassword('abcdefg '),
      {
        valid: false,
        reasons: [
          'missing_uppercase',
          'missing_digit',
          'missing_special',
          'has_whitespace'
        ]
      }
    );
  });

  await t.test('aceita caractere especial do conjunto permitido', () => {
    assert.deepStrictEqual(
      validatePassword('Abcdef1@'),
      {
        valid: true,
        reasons: null
      }
    );
  });

  await t.test('aceita outro caractere especial do conjunto permitido', () => {
    assert.deepStrictEqual(
      validatePassword('Abcdef1?'),
      {
        valid: true,
        reasons: null
      }
    );
  });

  await t.test('tabulação conta como whitespace', () => {
    assert.deepStrictEqual(
      validatePassword('Abcdef1!\t'),
      {
        valid: false,
        reasons: ['has_whitespace']
      }
    );
  });

  await t.test('quebra de linha conta como whitespace', () => {
    assert.deepStrictEqual(
      validatePassword('Abcdef1!\n'),
      {
        valid: false,
        reasons: ['has_whitespace']
      }
    );
  });

  await t.test('lança TypeError quando recebe null', () => {
    assert.throws(() => {
      validatePassword(null);
    }, TypeError);
  });

  await t.test('lança TypeError quando recebe undefined', () => {
    assert.throws(() => {
      validatePassword(undefined);
    }, TypeError);
  });

  await t.test('lança TypeError quando recebe número', () => {
    assert.throws(() => {
      validatePassword(12345678);
    }, TypeError);
  });

  await t.test('lança TypeError quando recebe objeto', () => {
    assert.throws(() => {
      validatePassword({});
    }, TypeError);
  });

  await t.test('lança TypeError quando recebe array', () => {
    assert.throws(() => {
      validatePassword(['Abc123!']);
    }, TypeError);
  });

  await t.test('lança TypeError quando recebe boolean', () => {
    assert.throws(() => {
      validatePassword(true);
    }, TypeError);
  });







  

});