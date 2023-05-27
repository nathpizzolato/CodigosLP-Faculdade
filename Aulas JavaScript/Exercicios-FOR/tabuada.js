
//repetições
//          1       2      3
//for ( let i=1; i<=10; i=i+1) {}
//1 inicialização (valor inicial)
//2 condição
//3 incremento
//para i começando em 1
//enquanto que o i for menor igual a 10
//a cada repetição aumentar 1 no valor de i

const prompt = require("prompt-sync")()

const numero = Number(prompt("Insira um numero que você quer saber a Tabuada: "));

console.log(); //deixa um espaço
console.log(`|| TABUADA DO ${numero} ||`);
//console.log("-".repeat(18)); repete um caracter

for (let i=1; i<=10; i=i+1){
    console.log(`${numero} x ${i} = ${numero*i}`);
}