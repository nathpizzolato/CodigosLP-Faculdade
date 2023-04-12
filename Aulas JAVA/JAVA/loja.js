const prompt = require("prompt-sync")()

const produto = prompt("Produto: ");
const valor = Number(prompt("Valor do produto: "));

console.log(`Produto: ${produto}`);
console.log(`Valor R$: ${valor.toFixed(2)}`);

if (valor < 100){
    console.log(`PAGAMENTO SOMENTE À VISTA`);
} else {
    const parcela = valor/3 ;
    console.log(`Pode ser pago em 3x de ${parcela.toFixed(2)}`);
}