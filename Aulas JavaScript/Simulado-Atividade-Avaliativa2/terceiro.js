//Elaborar um programa que leia 10 notícias. Após, solicite o número de notícias que um usuário deseja
//ver. Listar as últimas notícias (mais recentes) conforme o número informado.

const prompt = require("prompt-sync")();

const noticia = [];

console.log("Informe 10 noticias!");
console.log("-".repeat(20));

for(let i=0; i<=9; i++){
    noticia[i] = prompt(`${i+1}ª Noticia: `);
}

console.log();
const numero = Number(prompt("Quantas noticias exibir: "));

console.log();
console.log("Ultimas Noticias");
console.log("-".repeat(20));

let resto = noticia.length - numero

for (let i = (noticia.length -1); i >= resto; i--){
    console.log(noticia[i]);
}