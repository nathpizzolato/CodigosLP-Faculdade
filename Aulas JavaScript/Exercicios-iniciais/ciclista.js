const prompt = require("prompt-sync")()

const distancia = Number(prompt("Distancia percorrida (em metros):"));
const quilometros = Math.floor(distancia/1000);
const resto = distancia%1000;

console.log(`A distancia percorrida é ${quilometros}km e ${resto} metros`);