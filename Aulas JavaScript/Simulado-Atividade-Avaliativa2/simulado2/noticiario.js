const prompt = require("prompt-sync")()

const noticias = []

for (let i=0; i<=9; i++) {
  noticias[i] = prompt(`${i+1}ª Notícia: `)
}

console.log()

const quant = Number(prompt("Nº de Notícias: "))

console.log("\nÚltimas Notícias")
console.log("-".repeat(40))

for (let i=9; i>9-quant; i--) {
  console.log(noticias[i])
}
