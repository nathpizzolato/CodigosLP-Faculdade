//1. Elaborar um programa que leia disciplina e conceito (A, B, C ou D) de ‘n’ disciplinas. Informe ao
//final em quantas disciplinas o aluno for aprovado (A, B ou C) e em quantas reprovado (D)
const prompt = require("prompt-sync")()

console.log("-".repeat(20));
console.log(" REGISTRO DE NOTAS");
console.log("-".repeat(20));

let aprovado = 0;
let reprovado = 0;
let continua;
do{
    console.log("-".repeat(20));
    const disciplina = prompt("Disciplina: ");
    const nota = prompt("Conceito (A/B/C/D): ");
    console.log("-".repeat(20));
    
    if(nota == "A" || nota == "B" || nota == "C"){
        aprovado = aprovado + 1;
    }else{
        reprovado = reprovado + 1;
    }

    continua = prompt("Deseja continua (S/N): ");
    
}while(continua == "S")

console.log();
console.log(`Resumo do seu semestre`);
console.log(`Aprovado(a): ${aprovado} disciplina(as)`);
console.log(`Reprovado(a): ${reprovado} disciplina(as)`);
