const prompt = require("prompt-sync")()

const aluno = prompt("Nome do aluno: ");
const nota1 = Number(prompt("Avaliação 1: "));
const nota2 = Number(prompt("Avaliação 2: "));

const media = (nota1+nota2)/2;
console.log(`Aluno: ${aluno}| Média: ${media}.`);

if (media >=7){
    console.log(`APROVADO`);
} else {
    console.log(`REPROVADO`);
}