const prompt = require("prompt-sync")()

const modelos = []
const precos = []

console.log("Informe o modelo do veículo ou 'Fim' para sair")

// repete enquanto verdade (ou seja, para sempre)
// no caso, até encontrar um break (que sai do laço de repetição)
while (true) {
  const x = prompt("Modelo: ")
  if (x.toUpperCase() == "FIM") {
    break
  }
  const y = Number(prompt("Preço R$: "))

  // adiciona modelo e preco aos vetores
  modelos.push(x)
  precos.push(y)
}

console.log()
const frete = Number(prompt("Valor do Frete R$: "))

console.log("\nLista dos Veículos com Acréscimo do Frete")
for (let i = 0; i < modelos.length; i++) {
  console.log(`${modelos[i]} - ${(precos[i]+frete).toFixed(2)}`)
}
