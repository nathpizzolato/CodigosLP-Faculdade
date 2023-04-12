const prompt = require("prompt-sync")()

const numero = Number(prompt("Insira um numero: "));
const resto = numero%2;

console.log(`Número: ${numero}`);

if (resto == 0){
    console.log(`${numero} é Par.`);
} else {
    console.log(`${numero} é Impar.`);
}