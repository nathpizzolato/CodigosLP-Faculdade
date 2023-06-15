const numeros = [13, 20, 25, 30, 42, 45, 17, 93]

const tipos = []

for (const num of numeros) {
  if (num % 2 == 0) {
    tipos.push("Par")
  } else {
    tipos.push("Ímpar")
  }
}

console.log(numeros.join(", "))
console.log(tipos.join(", "))

const tipos2 = numeros.map(num => num % 2 == 0 ? "Par" : "Ímpar")

const tipos3 = numeros.map(num => {
  if (num % 2 == 0) {
    return "Par"
  } else {
    return "Ímpar"
  }
})

console.log(tipos2.join(", "))
console.log(tipos3.join(", "))

