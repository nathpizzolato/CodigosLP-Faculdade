//1. Elaborar um programa que leia um número. Mostre apenas os pares entre o número e 1,
//conforme o exemplo. Número: 15 Pares entre 15 e 1: 14 12 10 8 6 4 2
//< menor > maior

const prompt = require("prompt-sync")()

const numero = prompt("Informe um numero: ");
console.log();

let guarda="";
for(let i=numero; i>=1; i--){
    guarda = guarda + ((i%2 == 0) ? i : " ");
}
console.log(`Pares entre ${numero} e 1: ${guarda}`);
