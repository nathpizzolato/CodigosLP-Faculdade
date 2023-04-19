const prompt = require("prompt-sync")()

const laranjas = Number(prompt("Informe o numero de laranjas em estoque: "));
const copos = Math.floor(laranjas/6);
const sobra = (laranjas%6);

console.log(`Numero de Laranjas em estoque é ${laranjas}.`);
console.log(`Copos de sucos: ${copos}`);
console.log(`Laranjas restantes: ${sobra}`);