const numeros = [10, 12, 15, 20, 25]

// "pega" cada número e retorna ele * 2
const dobros = numeros.map(num => num * 2)

console.log(numeros.join(", "))
console.log(dobros.join(", "))

// define uma condição para retornar os números
const pares = numeros.filter(num => num % 2 == 0)
console.log(pares.join(", "))

const maiores = numeros.filter(num => num > 50)

if (maiores.length == 0) {
  console.log("Não há números maiores que 50 na lista")
}