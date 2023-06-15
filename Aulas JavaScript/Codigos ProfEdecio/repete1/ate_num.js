const prompt = require("prompt-sync")()

const num = Number(prompt("Número: "))

console.log(`Pares entre 1 e ${num}:`)

for (let i = 2; i <= num; i = i + 2) {
  console.log(i)
}

console.log("------------")