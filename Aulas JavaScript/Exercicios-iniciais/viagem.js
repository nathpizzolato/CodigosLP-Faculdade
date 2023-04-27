const prompt = require("prompt-sync")()

const cidade = prompt("Destino: ");
const dias = Number(prompt("Dias: "));
const horas = Number(prompt("Horas: "));

const duracao = (dias*24) + horas;
console.log(`A viagem terá a duração de ${duracao} horas.`);