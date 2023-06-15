const prompt = require("prompt-sync")()

const num = Number(prompt("Número: "))

let resposta = ""
let soma = 0

for (let i = 1; i <= num/2; i++) {
  if (num % i == 0) {
    resposta = resposta + i + " "
    soma = soma + i
  }
}

console.log(`Divisores do ${num}: ${resposta}`)
console.log(`Soma dos divisores: ${soma}`)
if (soma == num) {
  console.log(`${num} é um número perfeito`)
} else {
  console.log(`${num} não é um número perfeito`)
}