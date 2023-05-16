//Elaborar um programa que leia ‘n’ números, até ser digitado 0. Ao final, exiba quantos números
//foram digitados, a soma dos números e qual o maior número digitado.

const prompt = require("prompt-sync")()

let maior = 0;
let soma = 0;
let contador = 0;
let continua;

do{
    const numero = Number(prompt("Informe um numero ou 0 para sair: "));
    
    if(numero > maior){
        maior = numero;
    }
    soma = soma + numero;
    contador = contador + 1;
    continua = numero;

}while(continua != 0)

console.log("-".repeat(22));
console.log(`Numeros Digitados: ${(contador - 1)}`);
console.log(`Soma dos numeros: ${soma}`);
console.log(`Maior numero: ${maior}`);
console.log("-".repeat(22));
