const prompt = require("prompt-sync")()

const numero = Number(prompt("Informe um numero: "));

console.log();
console.log(`Entre 1 e ${numero}: `);

for(let i=1; i<=numero; i=i+1){
    console.log(i);
}