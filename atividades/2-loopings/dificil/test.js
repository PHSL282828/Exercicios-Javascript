const test = require('node:test');
const assert = require('node:assert/strict');

const { fizzbuzz } = require('./atividade');//caminho da atividade a ser corrigida por esse arquivo em especifico
//const{funçãoDeResposta} = require(./arquivoDaResposta)

test('atividade 06 - introdução a variaveis (DIFÍCIL)', async (t) => {
  await t.test('a=1,b=5', () => {
    assert.deepStrictEqual(fizzbuzz(1,5), [1,2,"Fizz",4,"Buzz"]);
  });

  await t.test('a=1,b=15', () => {
    assert.deepStrictEqual(fizzbuzz(1,"5"), [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"]);
  });

  await t.test('a=15,b=10', () => {
    assert.deepStrictEqual(fizzbuzz(1,5), ["FizzBuzz",16,17,"Fizz", 19, "Buzz"]);
  });

  await t.test('a=6,b=12', () => {
    assert.deepStrictEqual(fizzbuzz("6","12"), ["Fizz",7,8,"Fizz","Buzz",11,"Fizz"]);
  });

  await t.test('a=20,b=1', () => {
    assert.throws(fizzbuzz("20",1), RangeError);
  });

   await t.test('a=40,b=30', () => {
    assert.throws(fizzbuzz(20,1), RangeError);
  });

  await t.test('a=asasas, b=0', () => {
    assert.throws(fizzbuzz(asasas,0), TypeError);
  });

  await t.test('a=aiajs, b=alsal', () => {
    assert.throws(fizzbuzz(aiajs,alsal), TypeError);
  });





  
  

});