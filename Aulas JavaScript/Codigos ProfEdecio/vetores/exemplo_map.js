const numeros = [10, 15, 24, 32, 40, 45]

const dobros = numeros.map(num => num * 2)

console.log(numeros.join(", "))
console.log(dobros.join(", "))

console.log("-".repeat(40))

// exercício: a partir de um vetor de nomes, criar um outro vetor
// com os nomes precedidos por "Sr(a): "
// Mostrar os vetores
const nomes = ["Ana", "João", "Carlos", "Maria", "Pedro"]

const nomesFormais = nomes.map(nome => "Sr(a): " + nome)

console.log(nomes.join(", "))
console.log(nomesFormais.join(", "))