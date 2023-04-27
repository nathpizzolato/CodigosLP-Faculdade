const prompt = require("prompt-sync")()

const numero = Number(prompt("Informe um numero: "));

console.log();
console.log(`Entre ${numero} e 1: `);

for(let i=numero; i>=1; i=i-1){
    console.log(i);
}