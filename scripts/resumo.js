const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const pastaAtividades = path.resolve(__dirname, '../atividades');

const atividades = fs
  .readdirSync(pastaAtividades, { withFileTypes: true })
  //pega apenas pastas que tem arquivos dentro
  .filter((item) => item.isDirectory());
  //le todas as pastas dentro do diretorio atividades e pega o nome delas

let passaram = 0;
let falharam = 0;

console.log('===== INICIANDO CORREÇÃO =====\n');

for (const atividade of atividades) {
  const nomeAtividade = atividade.name;
  const caminhoTeste = path.join(pastaAtividades, nomeAtividade, 'test.js');
  //cria o caminho completo dos arquivos de teste com base nos pedaços montados antes 

  if (!fs.existsSync(caminhoTeste)) {
    console.log(`${nomeAtividade} sem arquivo teste.js`);
    falharam++;
    continue;
  }
  //caça todos os arquivos de nome test.js e executa eles, assim fazendo o teste em si funcionar

  const resultado = spawnSync('node', ['--test', caminhoTeste], {
    encoding: 'utf-8'
  });
  //guarda o resultado dos testes sequenciais
  
  //a correção acontece verificando os valores que retornam de cada teste
  //se fizer cada teste unitario, da pra ver que eles retornam um objeto
  //so analisar os status desse objeto que da tudo certo

  if (resultado.status === 0) {
    console.log(`${nomeAtividade} passou`);
    passaram++;
  } else {
    console.log(`${nomeAtividade} falhou`);
    falharam++;

    if (resultado.stdout) {
      console.log('--- saída do teste ---');
      console.log(resultado.stdout.trim());
    }

    if (resultado.stderr) {
      console.log('--- erros ---');
      console.log(resultado.stderr.trim());
    }
  }

  console.log('');
}

console.log('===== RESUMO FINAL =====');
console.log(`Passaram: ${passaram}`);
console.log(`Falharam: ${falharam}`);
console.log(`Total: ${atividades.length}`);

if (falharam > 0) {
  process.exit(1);
}