const prompt = require("prompt-sync")()

//programa para ler um produto - geladeira
//ler o seu valor - 800
//mostrar opções de pagamento em até 10x

const produto = prompt("Produto: ");
const valor = Number(prompt("Valor: "));

console.log()
console.log(`|| OPÇÕES DE PAGAMENTO ||`);
console.log("*".repeat(20));

let calculo;
for(let i=1; i<=10; i=i+1){
    calculo = (valor/i);
    console.log(`${i} x ${calculo.toFixed(2)}`);
}