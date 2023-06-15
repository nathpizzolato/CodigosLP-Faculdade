const prompt = require("prompt-sync")()

const num = Number(prompt("Número: "))

if (num < 5) {
  console.log("Erro... deve ser maior ou igual a 5")
} else {
  let resposta = ""
  for (let i = 5; i <= num; i=i+5) {
    resposta = resposta + i + " "
  }
  console.log(`Múltiplos de 5 até ${num}: ${resposta}`)
}
