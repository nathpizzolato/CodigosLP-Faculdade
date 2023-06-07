//Elaborar um programa que leia um número. Exiba todos os divisores deste número.

const prompt = require("prompt-sync")()

const numero = Number(prompt("Numero: "));

let resposta = "";

for(let i=1; i<=numero; i++){
    if(numero%i == 0){
        resposta = resposta + i + " ";
    }
}

console.log(`Divisores do ${numero}: ${resposta}`);