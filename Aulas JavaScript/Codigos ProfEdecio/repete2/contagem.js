const prompt = require("prompt-sync")()

const num = Number(prompt("Número: "))

console.log("Contagem Regressiva:")

for (let i=num; i >= 1; i--) {
  console.log(i)
}

console.log("Fogo!")