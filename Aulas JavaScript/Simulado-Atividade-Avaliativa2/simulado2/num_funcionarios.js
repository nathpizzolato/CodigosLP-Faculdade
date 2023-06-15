const prompt = require("prompt-sync")()

const func = Number(prompt("Nº de Funcionários em 2023: "))

console.log("\nPrevisão de Funcionários para os Próximos 5 anos")
console.log("-".repeat(40))

let dobro = func

for (let i = 1; i <= 5; i++) {
  dobro = dobro * 2
  console.log(`Em ${2023+i}: ${dobro} funcionários`)
}