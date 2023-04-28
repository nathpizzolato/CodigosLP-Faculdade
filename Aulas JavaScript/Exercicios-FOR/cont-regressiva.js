const prompt = require("prompt-sync") ()

//Elaborar um programa que leia um número. Após, faça uma contagem regressiva – conforme o exemplo.
//Número: 5 //Contagem Regressiva: //5//4//3//2//1//Fogo!!

const contagem = Number(prompt("Numero: "));
console.log();

console.log(`Contagem Regressiva: `);
for(let i=contagem; i>=1; i=i-1){
    console.log(i);
}
console.log(`FOGO !!`);
