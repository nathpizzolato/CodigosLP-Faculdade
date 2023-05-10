//Elaborar um programa que leia um número. Monte uma seta com * até o número informado
//e após retornando a 1, conforme o exemplo.
//Número: 8
//< menor > maior

const prompt = require("prompt-sync")();

const numero = prompt("Numero: ");

for(let i=1; i<numero; i++){
    let seta = "";
    for(let j=1; j<=i; j++){
        seta = seta + "*"
    }
    console.log(`${seta}`);
}
for(let i=numero; i>=1; i--){
    let seta = "";
    for(let j=1; j<=i; j++){
        seta = seta + "*"
    }
    console.log(`${seta}`)
}
