const prompt = require("prompt-sync")()

let aprovados = "";
let reprovados = "";
const nome = [];
const nota = [];

do{
    console.log("INFORME O NOME DO ALUNO OU FIM PARA SAIR");
    const a = prompt("Aluno: ");
    const n = Number(prompt("Nota: "));
    
    nome.push(a);
    nota.push(n);

    if(n >= 7){
        aprovados += (nome) + (nota);
    }else{
        reprovados += (nome) + (nota);
    }

}while( !nome.includes("FIM"));

console.log(`Alunos Aprovados`);
console.log("-".repeat(25));
console.log(`${aprovados}`);
console.log()
console.log(`Alunos Reprovados`);
console.log("-".repeat(25));
console.log(`${reprovados}`);