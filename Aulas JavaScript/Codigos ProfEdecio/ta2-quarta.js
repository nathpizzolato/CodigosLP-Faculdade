const prompt = require("prompt-sync")()

const alunos = [];

console.log("Informe o nome do aluno ou FIM para sair");
console.log();

let contador = 0;
do{
    contador++
    const x = prompt(`${contador} Aluno: `);
    if(x.toUpperCase() == "FIM"){
        break
    }
    alunos.push(x);
}while(true)

const numero = Number(prompt("Numero de alunos por grupo: "));

let grupo = 0;
for(let i=0; i<alunos.length; i++){
    if(i%numero == 0){
        console.log("=".repeat(20))
        grupo++
    }
    console.log(`Grupo ${grupo}: ${alunos[i]}`);
}
