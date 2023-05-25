const prompt = require("prompt-sync")()

const numeros = []

console.log("Informe os números ou 0 para sair")
do {
  const x = Number(prompt("Número: "))
  if (x == 0) {
    break
  }
  numeros.push(x)
} while (true)

console.log("\nPares da Lista")
console.log("-".repeat(30))
let contador = 0
for (let i=0; i < numeros.length; i++) {
  if (numeros[i] % 2 == 0) {
    console.log(numeros[i])
    contador++
  }
}
console.log("-".repeat(30))
console.log(`${contador} pares na lista`)

// outra forma
console.log("\nPares da Lista")
console.log("-".repeat(30))
let resposta = ""
for (let i=0; i < numeros.length; i++) {
  if (numeros[i] % 2 == 0) {
    resposta = resposta + numeros[i] + " "
  }
}
console.log(resposta)
console.log("-".repeat(30))
console.log(`${contador} pares na lista`)

