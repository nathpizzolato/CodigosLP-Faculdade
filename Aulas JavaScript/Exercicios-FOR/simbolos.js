const prompt = require("prompt-sync")()

//Elaborar um programa que leia 2 símbolos e um número. Após, preencha o espaço indicado pelo número com os símbolos, conforme o exemplo.
//1º Símbolo: - 2º Símbolo: * Número: 5 -*-*-

const simbol1 = prompt("Primeiro Simbolo: ");
const simbol2 = prompt("Segundo Simbolo: ");
const numero = Number(prompt("Numero: "));

console.log();

let resposta = "";
for(let i=0; i<numero; i=i+1){
    if(i%2 == 0){
        resposta = resposta + simbol1;
    }else{
        resposta = resposta + simbol2;
    }
}
console.log(`${resposta}`);