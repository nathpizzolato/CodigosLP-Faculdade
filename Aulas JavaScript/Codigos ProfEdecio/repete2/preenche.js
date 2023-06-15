const prompt = require("prompt-sync")()

const simb1 = prompt("1º Símbolo: ")
const simb2 = prompt("2º Símbolo: ")
const num = Number(prompt("Número: "))

let resposta = ""
for (let i=1; i<=num; i++) {
  if (i % 2 == 1) {
    resposta = resposta + simb1
  } else {
    resposta = resposta + simb2
  }
}
console.log(resposta)

// -----------------------------------
// outra forma
let resposta2 = (simb1+simb2).repeat(num/2)
if (num % 2 == 1) {
  resposta2 = resposta2 + simb1
}
console.log(resposta2)
