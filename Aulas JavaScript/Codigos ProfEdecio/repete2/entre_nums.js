const prompt = require("prompt-sync")()

const num1 = Number(prompt("1º Número: "))
const num2 = Number(prompt("2º Número: "))

let resposta = ""
if (num1 <= num2) {
  for (let i = num1; i <= num2; i++) {
    resposta = resposta + i + " "
  }
} else {
  for (let i = num1; i >= num2; i--) {
    resposta = resposta + i + " "
  }
}

console.log(`Entre ${num1} e ${num2}: ${resposta}`)