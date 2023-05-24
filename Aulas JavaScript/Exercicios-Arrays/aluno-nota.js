//Elaborar um programa que leia nome e nota de ‘n’ alunos (até ser digitado ‘Fim’ no nome ou que o usuário
//indique que não quer continuar). Após, liste os alunos em 2 grupos: Aprovados (nota >= 7) e Reprovados (nota < 7)

const prompt = require("prompt-sync")()

let aprovados = "";
let reprovados = "";
const nome = [];
const nota = [];

do{
    console.log();
    console.log("Infome o nome do aluno ou FIM para sair !!");
    console.log();

    const a = prompt("Aluno: ");
    const n = Number(prompt("Nota: "));

    nome.push(a);
    nota.push(n);

}while( !nome.includes("FIM"));

for(let i = 0; i < nome.length; i++){
    for(let j = 0; j < nota.length; j++){
        if(nota[j] >= 7 ){
            aprovados = aprovados + nome[i] + "-" + nota[j] + "|";
        }else{
            reprovados = reprovados + nome[i] + "-" + nota[j] + "|";
        }
    }
} 

console.log();
console.log(`Aprovados`);
console.log("-".repeat(20));
console.log(`${aprovados}`);
console.log();
console.log(`Reprovados`);
console.log("-".repeat(20));
console.log(`${reprovados}`);