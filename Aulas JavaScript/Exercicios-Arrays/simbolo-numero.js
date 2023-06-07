//Elaborar um programa que leia um número e um símbolo. Monte um quadrado, com o símbolo
//repetido no número de colunas e linhas, conforme o exemplo.

const prompt = require("prompt-sync")()

const numero = Number(prompt("Numero: "));
const simbolo = prompt("Simbolo");

for(let i=1; i<=numero; i++){
    console.log(`${simbolo.repeat(i)}`);
}
