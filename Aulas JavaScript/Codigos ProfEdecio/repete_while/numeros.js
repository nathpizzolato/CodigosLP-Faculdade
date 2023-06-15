const prompt = require("prompt-sync")()

console.log("Informe os números ou 0 para sair")

let contador = 0
let soma = 0
let maior = 0

do {
  const num = Number(prompt("Número: "))
  if (num == 0) {
    break
  }

  contador = contador + 1
  soma = soma + num

  if (num > maior) {
    maior = num
  }
} while (true)

console.log("-".repeat(30))
console.log(`Números Digitados: ${contador}`)
console.log(`Soma dos Números: ${soma}`)
console.log(`Maior Número: ${maior}`)