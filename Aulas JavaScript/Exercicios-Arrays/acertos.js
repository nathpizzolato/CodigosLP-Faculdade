//Elaborar um programa que leia nome e número de acertos de candidatos de um concurso,
//enquanto o usuário deseja continuar. Após, leia qual a pontuação mínima para aprovação. Liste
//apenas os candidatos aprovados nesta fase.

const prompt = require("prompt-sync")()

const candidatos = [];
const acertos = [];

do{
    const x = prompt("Nome do Candidato: ");
    const y = Number(prompt("Nº de Acertos: "));

    candidatos.push(x);
    acertos.push(y);

    const continua = prompt("Continua (S/N): ").toUpperCase();
    if(continua == "N"){
        break
    }
}while(true)

console.log()
const minimo = Number(prompt("Nº minimo de acertos para aprovação: "));

console.log("\nAprovados nesta fase")
console.log("-".repeat(30));

for(let i=0; i<candidatos.length; i++){
    if(acertos[i] >= minimo){
        console.log(`${candidatos[i]} - ${acertos[i]} acertos`);
    }
}

