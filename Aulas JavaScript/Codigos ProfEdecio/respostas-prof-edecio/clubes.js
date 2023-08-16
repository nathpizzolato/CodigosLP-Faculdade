const prompt = require("prompt-sync")()

const clubes = []

for (let i = 0; i <= 9; i++) {
  clubes[i] = prompt(`${i+1}º Clube: `)
}

console.log(`\nLista de Jogos`)
console.log("-".repeat(30))

for (let i=0; i<=9; i=i+2) {
  console.log(`${clubes[i]} x ${clubes[i+1]}`)
}

