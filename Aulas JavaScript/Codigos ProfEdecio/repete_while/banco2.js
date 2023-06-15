const prompt = require("prompt-sync")()

console.log("Informe o nome do cliente ou 'Fim' para sair")

let negativos = 0
do {
  const nome = prompt("Nome do Cliente: ").toUpperCase()
  if (nome == "FIM") {
    break
  }
  const saldo = Number(prompt("Saldo R$: "))

  if (saldo < 0) {
    negativos = negativos + 1
  }
} while (true)

console.log("-".repeat(30))
if (negativos == 0) {
  console.log("Não há clientes com saldo negativo")
} else {
  console.log(`${negativos} cliente(s) com saldo negativo`)  
}