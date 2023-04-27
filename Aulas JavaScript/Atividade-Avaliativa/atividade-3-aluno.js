const prompt = require("prompt-sync")()

const aluno = prompt("Infome o nome do aluno: ");
const turma = Number(prompt("Informe o numero de alunos na turma: "));
const sms = Number(prompt("Informe o numero de mensagens recebidas pelo aluno: "));
const porcentagem = turma*0.50;

console.log(`Aluno: ${aluno}`);
console.log(`Numero de alunos na turma: ${turma}`);
console.log(`Numero de mensagens: ${sms}`)

if(sms < porcentagem){
    console.log(`${aluno} temos que melhorar sua popularidade.`);
}else if(sms >= porcentagem){
    console.log(`Parabéns ${aluno}! Você é bem popular na turma.`);
}