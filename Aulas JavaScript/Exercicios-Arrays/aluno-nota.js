//Elaborar um programa que leia nome e nota de ‘n’ alunos (até ser digitado ‘Fim’ no nome ou que o usuário
//indique que não quer continuar). Após, liste os alunos em 2 grupos: Aprovados (nota >= 7) e Reprovados (nota < 7)

const prompt = require("prompt-sync")()

const nomes = [];
const notas = [];

console.log("Informe o nome do aluno ou FIM para sair");

//repete enquanto verdade (para sempre)
//no caso até encontrar um break que sai do laço de repetição
while(true){
    const x = prompt("Nome do Aluno: ");
    if(x.toUpperCase() == "FIM"){
        break
    }
    const y = Number(prompt("Nota: "));
    //adiciona nome e nota aos vetores
    nomes.push(x);
    notas.push(y);
}

console.log("\nLista dos Alunos Aprovados");
for(let i=0; i < nomes.length; i++){
    if(notas[i] >= 7){
        console.log(`${nomes[i]} - ${notas[i]}`);
    }
}

console.log("\nLista de Alunos Reprovados");
for(let i=0; i < nomes.length; i++){
    if(notas[i] < 7){
        console.log(`${nomes[i]} - ${notas[i]}`);
    }
}