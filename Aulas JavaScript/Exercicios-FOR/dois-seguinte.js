const prompt = require("prompt-sync")()

//Elaborar um programa que leia 2 números. Mostre os números entre eles, incluindo-os.
//ex 20 e 27

console.log();
const inicio = Number(prompt("Contagem começa em: "));
const final = Number(prompt("Contagem termina em: "));

console.log();
console.log("*".repeat(25));
console.log();

let acumulado = ""
for(let i=inicio; i<=final; i=i+1){
    acumulado = acumulado + i + " ";
}

console.log(`Numeros entre ${inicio} e ${final} (incluindo os mesmos): ${acumulado}`);
console.log();