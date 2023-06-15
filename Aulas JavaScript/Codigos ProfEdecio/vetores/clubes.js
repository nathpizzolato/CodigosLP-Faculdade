const prompt = require("prompt-sync")()

const clubes = ["Gremio", "America", "Bahia", "Corinthians", "Palmeiras", "Athletico"]

for (let i=0; i < clubes.length; i++) {
  console.log(clubes[i])
}

console.log(`Primeiro Clube: ${clubes[0]}`)
clubes.push("Flamengo")
clubes.unshift("Sao Paulo")

console.log(clubes.join(", "))

console.log("-".repeat(40))

for (const clube of clubes) {
  console.log(clube)
}

console.log("=".repeat(40))
const pesquisa = prompt("Informe o Clube: ")

const posicao = clubes.indexOf(pesquisa)

// -1: indica que não encontrou
if (posicao == -1) {
  console.log("Ah... seu clube não se classificou")
} else {
  console.log(`Show... seu clube está classificado na ${posicao+1} posição`)
}