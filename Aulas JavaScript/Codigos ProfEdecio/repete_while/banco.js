const prompt = require("prompt-sync")()

let continua

let negativos = 0
do {
  const nome = prompt("Nome do Cliente: ")
  const saldo = Number(prompt("Saldo R$: "))

  if (saldo < 0) {
    negativos = negativos + 1
  }

  continua = prompt("Deseja Continuar (S/N): ").toUpperCase()
} while (continua == "S")

console.log("-".repeat(30))
if (negativos == 0) {
  console.log("Não há clientes com saldo negativo")
} else {
  console.log(`${negativos} cliente(s) com saldo negativo`)  
}