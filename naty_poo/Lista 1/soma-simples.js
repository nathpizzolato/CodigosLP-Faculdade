const input = require('fs').readFileSync('stdin.txt','utf8');
const lines = input.split('\n'); // ('30','99')
/* split é uma função da string que serve 
para separar uma string dentro do split 
se coloca quando separar */

const n1 = +lines[0];
const n2 = +lines[1];

const soma = n1+n2;

console.log(`SOMA = ${soma}`);