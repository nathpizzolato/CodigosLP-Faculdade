const prompt = require("prompt-sync")()

const ovos = Number(prompt("Ovos obtidos no dia:"));
const caixas = Math.round(ovos/12);
const sobra = Math.round(ovos%12);

console.log(`Caixas (duzia): ${caixas}`);
console.log(`Ovos restantes: ${sobra}`);
