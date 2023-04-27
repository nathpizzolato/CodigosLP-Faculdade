const prompt = require("prompt-sync")()

const produto = prompt("Medicamento: ");
const preco = Number(prompt("Preço R$: "));

const promocao = Math.floor(preco)*2;

console.log(`${produto} em promoção, na compra de 2 unidades fica por R$${promocao.toFixed(2)}`);