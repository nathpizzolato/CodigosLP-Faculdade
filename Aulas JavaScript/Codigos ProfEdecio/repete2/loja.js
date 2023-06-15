const prompt = require("prompt-sync")()

const produto = prompt("Produto: ")
const preco = Number(prompt("Preço R$: "))

console.log(`Opções de Parcelamento: ${produto}`)
console.log("-".repeat(40))

for (let i=1; i <= 10; i++) {
  console.log(`${i}x de R$: ${(preco/i).toFixed(2)}`)
}