const prompt = require("prompt-sync")()

//Elaborar um programa que leia uma palavra e um número. Após, informe a palavra o número de vezes informado. Exibir * entre as palavras.
//Palavra: Senac Número: 4 Senac * Senac * Senac * Senac 

const palavra = prompt("Palavra: ");
const numero = Number(prompt("Numero: "));

let guarda = "";
for(let i=numero; i>=1; i=i-1){
    guarda = guarda + palavra + (i==1 ? "" : " * ");
}
console.log(`${guarda}`);

//forma do professor
//for(let i=1; i<numero; i++){
//resposta=resposta+palavra+" * "    
//}console.log(resposta+palavra);