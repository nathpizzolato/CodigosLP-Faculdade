const prompt = require("prompt-sync")()

const numero = Number(prompt("Insira um numero que você quer saber a Tabuada: "));

console.log(); //deixa um espaço
console.log(`|| TABUADA DO ${numero} ||`);
//console.log("-".repeat(18)); repete um caracter

for (let i=1; i<=10; i=i+1){
    console.log(`${numero} x ${i} = ${numero*i}`);
}