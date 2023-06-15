const prompt = require("prompt-sync")()

const filmes = [
  { titulo: "Mario Bros", genero: "Animação", tempo: 92 },
  { titulo: "Velozes e Furiosos 10", genero: "Ação", tempo: 125 },
  { titulo: "Guardiões da Galáxia 2", genero: "Aventura", tempo: 108 },
  { titulo: "Titanic", genero: "Romance", tempo: 178 },
]

// incluir um novo filme
const titulo = prompt("Título do Filme: ")
const genero = prompt("Gênero: ")
const tempo = Number(prompt("Tempo (min): "))

// filmes.push({titulo: titulo, genero: genero, tempo: tempo})
filmes.push({titulo, genero, tempo})

console.log("-".repeat(40))
// listar os filmes
for (const filme of filmes) {
  console.log(`${filme.titulo} - ${filme.tempo}min`) 
}