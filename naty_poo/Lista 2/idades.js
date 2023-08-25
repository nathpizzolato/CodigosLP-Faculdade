const input = require('fs').readFileSync('teste.txt', 'utf8');
const lines = input.split('\n');

let somaIdades = 0;
let totalPessoas = 0;

while (true) {
  let idade = +lines.shift();
  if (idade < 0) {
    break;
  }
  totalPessoas += 1;
  somaIdades += idade;
}

console.log((somaIdades / totalPessoas).toFixed(2));
