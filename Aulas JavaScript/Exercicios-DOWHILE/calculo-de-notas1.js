//exemplo aula professor.
const prompt = require("prompt-sync")()

console.log("Programa cálculo de notas");
console.log();

let continua
do{
    const nome = prompt("Informe o nome do aluno: ");
    const nota = Number(prompt("Informe a nota do aluno: "));

    if(nota >= 7){
        console.log(`Parabéns ${nome} você foi aprovado(a). `);
    }else{
        console.log(`${nome} você foi reprovado(a).`);
    }
    continua = prompt("Deseja continuar (S/N): ");
}while(continua == "S");

console.log("Sistema foi finalizado.");