const prompt = require("prompt-sync")()

const time1 = prompt("Informe o primeiro time: ");
const time2 = prompt("Informe o segundo time: ");
let gol1 = Number(prompt("Informe o numero de gols do primeiro time: "));
let gol2 = Number(prompt("Informe o numero de gols do segundo time: "));

console.log(`${time1} x ${time2}`);
console.log(`${time1} fez ${gol1} gols | ${time2} fez ${gol2} gols`);

if(gol1 > gol2){
    console.log(`O vencedor da partida foi ${time1}.`);
}else if(gol1 < gol2){
    console.log(`O vencedor da partida foi ${time2}.`);
}else{
    console.log(`A partida acabou empatada.`);
}

let total = gol1 + gol2;
if(gol1 > 0 && gol2 > 0){
    console.log(`A partida teve um total de ${total} gols.`);
}
