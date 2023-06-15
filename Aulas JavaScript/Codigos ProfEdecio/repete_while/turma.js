const prompt = require("prompt-sync")()

const nomes = []
const notas = []

console.log("Informe o nome do aluno ou 'Fim' para sair")

do {
  const x = prompt("Nome: ")
  if (x == "Fim") {
    break
  }
  const y = Number(prompt("Nota: "))

  nomes.push(x)
  notas.push(y)
} while (true)

console.log("\nLista dos Aprovados")
console.log("-".repeat(30))

for (let i=0; i < nomes.length; i++) {
  if (notas[i] >= 7) {
    console.log(`${nomes[i]} - ${notas[i].toFixed(1)}`)
  }
}

console.log("\nLista dos Reprovados")
console.log("-".repeat(30))

for (let i=0; i < nomes.length; i++) {
  if (notas[i] < 7) {
    console.log(`${nomes[i]} - ${notas[i].toFixed(1)}`)
  }
}

