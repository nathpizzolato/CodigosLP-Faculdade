const prompt = require("prompt-sync")()

const numero = Number(prompt("Informe um numero: "));

console.log();

let resposta = "";
for(let i=1; i<=numero; i=i+1){
    resposta = resposta + i + " ";
}
console.log(`Entre 1 e ${numero}: ${resposta}`);