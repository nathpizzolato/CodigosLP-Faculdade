const prompt = require("prompt-sync")()

const num = Number(prompt("Número: "))

let resposta = ""
for (let i=num+1; i <= num+10; i++) {
  resposta = resposta + i + " "
//  console.log(resposta)
//  prompt()
}
console.log(`Seguintes ao ${num}: ${resposta}`)
