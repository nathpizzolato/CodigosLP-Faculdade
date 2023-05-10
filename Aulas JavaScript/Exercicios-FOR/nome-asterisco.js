//Elaborar um programa que leia um número e um nome. Exiba o nome entre “*”. 
//O número indica a quantidade de * que devem ser inseridas antes e após o nome.
//Nome: Rosane Número: 10 ********** Rosane **********
//< menor > maior

const prompt = require("prompt-sync")()

const nome = prompt("Nome: ");
const numero = prompt("Numero de asteriscos: ");
//console.log("*".repeat(numero) + " " + `${nome}` + " " + "*".repeat(numero));
console.log();

let acumula = "";
for(let i=1; i<=numero; i++){
    acumula = acumula + "*";
}
console.log(`${acumula} ${nome} ${acumula}`);