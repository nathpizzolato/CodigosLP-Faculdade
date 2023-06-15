const prompt = require("prompt-sync")()

const alunos = [];

while(true){
    const x = prompt("Aluno: ");
    if( x.toUpperCase() == "FIM"){
        break
    }
    alunos.push(x);
}

const grupos = Number(prompt("Formar Grupos de quantos Alunos: "));

for(let i=0; i<=alunos.length-1; i++){

    if(i < grupos){
    console.log("Grupo 1: ", alunos[i]);
    }else if(i < grupos*2){
        console.log("Grupo 2: ", alunos[i]);
    }else{
        console.log("Grupo 3: ", alunos[i])
    }
}
