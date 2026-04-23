const test = require('node:test');
const assert = require('node:assert/strict');
//dois pacotes que são usado para o teste unitario

const { multiplicaVet } = require('./att3');//caminho da atividade a ser corrigida por esse arquivo em especifico
//const{funçãoDeResposta} = require(./arquivoDaResposta)

test('atividade 03 - multiplica vetor', async (t) => {
  await t.test('[1,2,3,4] *5 = [5,10,15,20]', () => {
    const resultado=[5,10,15,20];
    assert.deepStrictEqual(multiplicaVet([1,2,3,4],5), resultado);
  });
  });
//o que ta entre parenteses é o que vai ser printado na tela
//o assert.equal fala que -> assert.equal(funcaoDoTrainee, resultadoEsperado)
//se cria um await t.test pra cada um



//então resumindo, criamos um arquivo de teste para cada exercicio, usando o await t.test
//se passa então, para a função de teste em si, que temos 3 diferentes

//equal -> assert.equal(funcaoDoTrainee(parametros), resultadoEsperado), que é ideal para valores singulares, sem mexer em estrutura
// numero, string, boolean

//deepEqual ->assert.deepEqual(funcaoDoTrainee(parametros), resultadoEsperado)
//array, objeto, matriz


//deepStrictEqual -> assert.deepEqual(funcaoDoTrainee(parametros), resultadoEsperado), que é ideal para estruturas de dados, como objetos, vetores e etc
//mesma coisa do deepEqual, mas esse verifica tipagem das respostas tambem

//no geral, vale mas a pena usar o deepStrictEqual para estruturas de dados, que nem fiz nesse aqui