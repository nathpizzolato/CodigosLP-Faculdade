const prompt = require("prompt-sync")()

//programa que leia um numero
//mostre os 10 numeros seguinte
//ex: numero 13 , mostrar 14 15 16 17 18 19 20 21 22 23

const numero = Number(prompt("Numero inicial: "));
console.log();

let seguinte = ""
for(let i=numero+1; i<=(numero+10); i=i+1){
    seguinte = seguinte + i + (i==(numero+10) ? "." : ", ");
}

console.log(`Numeros seguintes ao ${numero}: ${seguinte} `);