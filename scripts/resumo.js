const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const pastaAtividades = path.resolve(__dirname, '../atividades');

const ordemDificuldade = ['facil', 'medio', 'dificil'];

const blocos = fs
  .readdirSync(pastaAtividades, { withFileTypes: true })
  .filter((item) => item.isDirectory())
  .sort((a, b) => a.name.localeCompare(b.name));

let passaram = 0;
let falharam = 0;
let total = 0;

console.log('===== INICIANDO CORREÇÃO =====\n');

for (const bloco of blocos) {
  const nomeBloco = bloco.name;
  const caminhoBloco = path.join(pastaAtividades, nomeBloco);

  const exercicios = fs
    .readdirSync(caminhoBloco, { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .sort((a, b) => {
      const ia = ordemDificuldade.indexOf(a.name.toLowerCase());
      const ib = ordemDificuldade.indexOf(b.name.toLowerCase());

      const valorA = ia === -1 ? Number.MAX_SAFE_INTEGER : ia;
      const valorB = ib === -1 ? Number.MAX_SAFE_INTEGER : ib;

      if (valorA !== valorB) {
        return valorA - valorB;
      }

      return a.name.localeCompare(b.name);
    });

  console.log(`--- ${nomeBloco} ---`);

  for (const exercicio of exercicios) {
    const nomeExercicio = exercicio.name;
    const caminhoExercicio = path.join(caminhoBloco, nomeExercicio);
    const caminhoTeste = path.join(caminhoExercicio, 'test.js');

    total++;

    if (!fs.existsSync(caminhoTeste)) {
      console.log(`${nomeBloco}/${nomeExercicio} sem arquivo test.js`);
      falharam++;
      continue;
    }

    const resultado = spawnSync('node', ['--test', caminhoTeste], {
      encoding: 'utf-8'
    });

    if (resultado.status === 0) {
      console.log(`${nomeBloco}/${nomeExercicio} passou`);
      passaram++;
    } else {
      console.log(`${nomeBloco}/${nomeExercicio} falhou`);
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
}

console.log('===== RESUMO FINAL =====');
console.log(`Passaram: ${passaram}`);
console.log(`Falharam: ${falharam}`);
console.log(`Total: ${total}`);

if (falharam > 0) {
  process.exit(1);
}