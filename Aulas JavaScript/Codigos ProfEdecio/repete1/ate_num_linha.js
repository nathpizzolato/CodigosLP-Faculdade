const prompt = require("prompt-sync")()

const num = Number(prompt("Número: "))

let resposta = ""

for (let i = 1; i <= num; i = i + 1) {
  resposta = resposta + i + " "
  // console.log(resposta)
  // prompt()
}

console.log(`Entre 1 e ${num}: ${resposta}`)