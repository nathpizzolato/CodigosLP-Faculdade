const prompt = require("prompt-sync")()

let continua 
do {
  const nome = prompt("Nome do Aluno: ")
  const nota = Number(prompt("Nota: "))

  if (nota >= 7) {
    console.log(`Parabéns, ${nome}! Você foi aprovado(a)`)
  } else {
    console.log(`Ops, ${nome}... Você foi reprovado(a)`)
  }

  // .toUpperCase(): converte a string para maiúscula
  continua = prompt("Deseja Continuar (S/N): ").toUpperCase()
} while (continua == "S")

console.log("Bye, bye...")