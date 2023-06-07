//Elaborar um programa que leia um número. Informe se ele é ou não é um Número Primo.

const prompt = require("prompt-sync")()

const numero = Number(prompt("Informe um numero: "));

let divisores = 0;

for(let i=1; i<=numero; i++){
    if(numero%i == 0){
        divisores = divisores + 1;
    }
}

if(divisores == 2){
    console.log(`${numero} é Primo!`);
}else{
    console.log(`${numero} NÃO é Primo!`);
}