const prompt = require("prompt-sync")()

const sorteados = [5, 12, 27, 32, 50, 53]

const aposta = Number(prompt("Número Apostado: "))

// indexOf(), verifica se existe e, se existir, retorna o índice do elemento
// se não existir, retorna -1
const verifica = sorteados.indexOf(aposta)

if (verifica == -1) {
  console.log("Bah... você errou...")
} else {
  console.log(`Você acertou! É o ${verifica+1}º número sorteado`)
}