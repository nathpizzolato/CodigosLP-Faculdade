const prompt = require("prompt-sync")()

// declara os vetores
const produtos = []
const precos = []

let continua
do {
  const x = prompt("Nome do Produto: ")
  const y = Number(prompt("Preço R$: "))

  // adiciona os dados aos vetores
  produtos.push(x)
  precos.push(y)

  continua = prompt("Continua (S/N): ").toUpperCase()
} while (continua == "S")

console.log("\nNota Fiscal da Compra")
console.log("-".repeat(40))

let soma = 0

// produtos.length: retorna o tamanho do vetor
for (let i=0; i < produtos.length; i++) {
  console.log(`${produtos[i].padEnd(20)} ${precos[i].toFixed(2).padStart(10)}`)
  soma = soma + precos[i]
}
console.log("-".repeat(40))
console.log(`Total R$...........: ${soma.toFixed(2).padStart(10)}`)
