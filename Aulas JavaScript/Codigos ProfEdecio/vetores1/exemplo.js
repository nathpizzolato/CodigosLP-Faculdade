const numeros = [10, 15, 20, 30, 35]

console.log(`1º Número da Lista: ${numeros[0]}`)
console.log(`Tamanho da Lista: ${numeros.length}`)

const tam = numeros.length
console.log(`Último Número da Lista: ${numeros[tam - 1]}`)

numeros.push(40)
numeros.unshift(5)

// percorrer a lista
console.log("\nNúmeros da Lista")
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i])
}

console.log("\nNúmeros Pares da Lista")
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 == 0) {
    console.log(numeros[i])
  }
}


