const prompt = require("prompt-sync")()

//Elaborar um programa que leia um número. Exiba os múltiplos de 5 até ele. Exiba mensagem caso o número seja inferior a 5.
//Número: 4 Ops... Número deve ser maior ou igual a 5

const numero = Number(prompt("Numero: "));
console.log();

let multiplos = "";
if(numero < 5){
    console.log("Ops... Número dever ser maior ou igual a 5");
    console.log();
} else {
    for(let i=numero; i>=1; i=i-1){
        (i%5 == 0 ? (multiplos = multiplos + i + " ") : false );
} 
    console.log(`Multiplos de 5 até ${numero}: > ${multiplos}<`);
    console.log();
}