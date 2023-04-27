const prompt = require("prompt-sync")()

const produto = prompt("Insira o nome do medicamento: ");
const valor = Number(prompt("Insira o valor do medicamento: "));
const quant = prompt("Quantas unidades? (1 ou 2): ");

if (quant > "2"){
    console.log(`MAXIMO DE 2 UNIDADES POR CLIENTE`);
}

const total = Math.floor(valor)*2;

if (quant == "1"){
    console.log(`Medicamento: ${produto} Valor: ${valor} Unidades: ${quant} Total a pagar: ${valor}`);
} else if (quant == "2"){
    console.log(`Promoção de ${produto} na compra de 2 unidades, o total é R$${total}`);
}