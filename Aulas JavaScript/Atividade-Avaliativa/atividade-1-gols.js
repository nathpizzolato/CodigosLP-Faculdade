const prompt=require("prompt-sync")()

const jogador = prompt("Informe o nome do jogador: ");
const gol = Number(prompt("Informe o numero de gols: "));

const bonus = 3000*gol;
console.log(`Jogador: ${jogador}`);
console.log(`Numero de gols marcados: ${gol}`);
console.log(`${jogador}, você irá receber um extra de R$ ${bonus.toFixed(2)}`);
