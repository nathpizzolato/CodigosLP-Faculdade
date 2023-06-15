const prompt = require("prompt-sync")()

const numeros = [2, 5, 8, 13, 20, 25, 30]

// num: elemento do vetor
// num % 2 == 0: é a condicão do filtro
const pares = numeros.filter(num => num % 2 == 0)

console.log("Números: " + numeros.join(", "))
console.log("Pares: " + pares.join(", "))

// Exercício: Ler um número e criar um outro vetor apenas
// com os números (do vetor numeros) maiores do este número.
// Apresentar o novo vetor
const limite = Number(prompt("Número: "))

const maiores = numeros.filter(num => num > limite)

if (maiores.length == 0) {
  console.log(`Não há maiores que ${limite} na lista`)
} else {
  console.log("Maiores: " + maiores.join(", "))
}

