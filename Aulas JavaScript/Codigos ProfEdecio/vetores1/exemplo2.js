const numeros = [10, 15, 20, 30, 35]

console.log(`1º Número da Lista: ${numeros[0]}`)
console.log(`Tamanho da Lista: ${numeros.length}`)

const tam = numeros.length
console.log(`Último Número da Lista: ${numeros[tam - 1]}`)

numeros.push(40)
numeros.unshift(5)

console.log("\nLista dos Números")
// outra forma de percorrer um vetor
for (const num of numeros) {
  console.log(num)
}

console.log("\nLista dos Pares")
// outra forma de percorrer um vetor
for (const num of numeros) {
  if (num % 2 == 0) {
    console.log(num)
  }
}
