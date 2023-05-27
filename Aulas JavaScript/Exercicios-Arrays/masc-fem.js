//Elaborar um programa que leia 10 nomes de pessoas que irão participar de um encontro. Sabendo
//que os nomes são informados na seguinte ordem: um homem e uma mulher, exiba os participantes
//em 2 grupos: Homens e Mulheres.

const prompt = require("prompt-sync")()

const nomes = [];

console.log("Informe 10 nomes entre Masculino e Feminino intercalando");
console.log();

for(let i = 0; i <= 9; i++){
    nomes[i] = prompt(`${i+1}º Nome: `);
}

console.log("\nHomens");
for(let i = 0; i <= 9; i++){
    if( (i+1)%2 != 0){
        console.log(`${nomes[i]}`); 
    }
}

console.log();
console.log("-".repeat(20));

console.log("\nMulheres")
for(let i = 0; i <= 9; i++){
    if((i+1)%2 == 0){
        console.log(`${nomes[i]}`);
    }
}