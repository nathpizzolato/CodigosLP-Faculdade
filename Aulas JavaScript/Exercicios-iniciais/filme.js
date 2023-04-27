const prompt = require("prompt-sync")()

const filme = prompt("Informe o nome do filme:");
const duracao = Number(prompt("Insira a duração em minutos do filme:"));
const horas = Math.floor(duracao/60);
const minuto = duracao%60;


console.log(`O filme ${filme} tem duração de ${horas} horas e ${minuto} minutos.`);

