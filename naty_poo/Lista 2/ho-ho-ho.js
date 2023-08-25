const input = require('fs').readFileSync('teste.txt', 'utf8');
const lines = input.split(' ');

const numeroDeHO = +lines[0];

let fala = "";

for (let i = 0; i < numeroDeHO; i++) {
  fala += "Ho "
}
fala = fala.trim();
fala += "!"
console.log(fala);