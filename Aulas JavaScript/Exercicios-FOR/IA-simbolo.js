const prompt = require("prompt-sync")()

//Elaborar um programa que leia 2 símbolos e um número. Após, preencha o espaço indicado pelo número com os símbolos, conforme o exemplo.
//1º Símbolo: - 2º Símbolo: * Número: 5 -*-*-

let primeiroSimbolo = prompt("Digite o primeiro símbolo:");
let segundoSimbolo = prompt("Digite o segundo símbolo:");
let numero = parseInt(prompt("Digite o número:"));

let resultado = "";

for (let i = 0; i < numero; i++) {
    if (i % 2 == 0) {
        resultado += primeiroSimbolo;
}   else {
        resultado += segundoSimbolo;
}
}
console.log(resultado);