const prompt = require("prompt-sync")()

const nomes = ["Ana", "Bianca", "Carlos", "Débora", "Eduardo", "Fernanda"]
console.log(nomes.join(", "))

const letra = prompt("Letra: ")

const nomes2 = nomes.filter(nome => nome.indexOf(letra) >= 0)
const nomes3 = nomes.filter(nome => nome.includes(letra))

if (nomes2.length == 0) {
  console.log("Não há nomes com a letra informada")
} else {
  console.log(nomes2.join(", "))
  console.log(nomes3.join(", "))
}