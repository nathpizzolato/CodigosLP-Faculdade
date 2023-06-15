const cidades = ["Pelotas", "Porto Alegre", "São Lourenço", "Caxias"]
cidades.push("Bagé")

console.log(cidades.join(", "))

console.log("-".repeat(40))
for (let i=0; i<cidades.length; i++) {
  console.log(cidades[i])
}

console.log("=".repeat(40))
for (const nome of cidades) {
  console.log(nome)
}
