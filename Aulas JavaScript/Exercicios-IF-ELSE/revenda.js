const prompt = require("prompt-sync")()

const modelo = prompt("Modelo do veiculo: ");
const marca = prompt("Marca do veiculo: ");
const valor = Number(prompt("Valor do veiculo: "));

console.log(`Modelo: ${modelo}`);
console.log(`Marca: ${marca}`);
console.log(`Valor: R$ ${valor.toFixed(2)}`);

// .toUpperCasa() > força a string a ficar toda a em maiusculo
// 10% = 0.10

let desconto;
if (marca.toUpperCase() == "Fiat".toUpperCase() ){
    desconto = valor * 0.10;
} else {
    desconto = valor * 0.20;
}
const final = valor-desconto;
console.log(`Desconto: R$ ${desconto.toFixed(2)}`);
console.log(`Preço à vista: R$ ${final.toFixed(2)}`);