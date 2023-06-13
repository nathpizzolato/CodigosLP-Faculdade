//Um número é dito “Perfeito” quando é igual a soma dos seus divisores (exceto ele próprio). Elaborar
//um programa que leia um número, exiba os divisores do número e a soma deles e informe se ele é ou
//não é um Número Perfeito

const prompt = require("prompt-sync")()

const numero = Number(prompt("Informe um Número: "));

let soma = 0;
let divisor = "";

console.log("-".repeat(25));
// i < numero porque se não ele pega o numero tbm
for(let i=0; i<numero; i++){
    if(numero%i == 0){
        divisor = divisor + i + ", ";
        soma = soma + i
    }
}
 console.log(`Número: ${numero}`);
 console.log(`Divisores: ${divisor}`);
 console.log(`Soma dos Divisores: ${soma}`);

 if(soma == numero){
    console.log(`${numero} é um Número Perfeito!`);
 }else{
    console.log(`${numero} NÃO é um Número Perfeito!`);
 }