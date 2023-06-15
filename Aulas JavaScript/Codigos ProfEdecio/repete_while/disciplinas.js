const prompt = require("prompt-sync")()

let continua

let numAp = 0
let numRep = 0
do {
  const disciplina = prompt("Disciplina: ")
  const conceito = prompt("Conceito (A, B, C ou D): ").toUpperCase()

  if (conceito == "A" || conceito == "B" || conceito == "C") {
    numAp = numAp + 1         // numAp++
  } else if (conceito == "D") {
    numRep = numRep + 1
  } else {
    console.log("Conceito Inválido... Informe novamente")
  }

  continua = prompt("Deseja Continuar (S/N): ").toUpperCase()
} while (continua == "S")

console.log("-".repeat(30))
console.log(`Nº Disciplinas Aprovadas: ${numAp}`)
console.log(`Nº Disciplinas Reprovadas: ${numRep}`)