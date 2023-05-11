//exemplo aula prof.
const prompt = require("prompt-sync")()

console.log();
console.log("Iniciando o sistema ...");
console.log();
console.log("-- Registro de Alunos e Notas --");
console.log();

//contador e acumulador
let total = 0;
let contador = 0;

let continua;
do{
    console.log("-".repeat(20));
    const nome = prompt("Nome do aluno: ");
    const nota = Number(prompt("Nota do aluno: "));
    console.log("-".repeat(20));
    console.log();

    if(nota >= 7){
        console.log(`Parabéns ${nome} você foi APROVADO.`);
    }else{
        console.log(`${nome} você foi REPROVADO.`);
    }

    total = total + nota;
    contador = contador + 1;

    console.log();
    continua = prompt("Deseja continuar (S/N): ");
    console.log();
}while(continua == "S")

console.log("Calculando a média da turma ...");
const media = total/contador;
console.log();

console.log("-".repeat(20));
console.log(`Média da turma: ${media.toFixed(1)}`);
console.log("-".repeat(20));
console.log();

console.log("Finalizando o sistema ...");
