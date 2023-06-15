const prompt = require("prompt-sync")()

const clientes = []
const idades = []

console.log("Informe o nome dos clientes ou 'Fim' para sair")

do {
  const x = prompt("Nome do Cliente: ")
  if (x.toUpperCase() == "FIM") {
    break
  }
  const y = Number(prompt("Idade: "))

  clientes.push(x)
  idades.push(y)
} while (true)

console.log("\nOrdem de Chamada")
console.log("-".repeat(40))

let contador = 0

for (let i = 0; i < clientes.length; i++) {
  if (idades[i] > 60) {
    contador++
    console.log(`${contador}. ${clientes[i]}`)
  }
}

for (let i = 0; i < clientes.length; i++) {
  if (idades[i] <= 60) {
    contador++
    console.log(`${contador}. ${clientes[i]}`)
  }
}