const prompt = require("prompt-sync")()

let valor = Number(prompt("Informe o valor a ser sacado: "));
let teste =  valor%10;

console.log(`Saque: R$${valor.toFixed(2)}`);
let notas;
if (teste == 0){
    notas = valor/10;
    console.log(`O valor R$${valor.toFixed(2)} será sacado em ${notas} notas de R$10.`);
}else {
    console.log(`O valor ${valor.toFixed(2)} não pode ser sacado, terminal possui apenas notas de R$10. `);
}