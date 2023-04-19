const prompt = require("prompt-sync")()

let numero = Number(prompt("Insira um numero: "));
let parimpar = numero%2

console.log(`Numero informado: ${numero}`);
let calculo;

if (parimpar == 0){
    calculo = numero+2;
    console.log(`Proximo numero par é: ${calculo}`);
}else {
    calculo = numero+1;
    console.log(`Proximo numero par é: ${calculo}`);
}