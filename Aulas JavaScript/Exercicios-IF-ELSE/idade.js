const prompt = require("prompt-sync")()

const nome = prompt("Informe o nome do aluno: ");
const ano = Number(prompt("Informe o ano de nascimento do aluno: "));
const idade = 2023-ano;

console.log(`Nome do aluno: ${nome}`);
console.log(`Ano de nascimento: ${ano}`);
console.log(`Idade do aluno: ${idade}`);

if (idade <= 17){
    console.log(`${nome}, você é menor de idade.`);
} else {
    console.log(`${nome}, você é maior de idade.`);
}