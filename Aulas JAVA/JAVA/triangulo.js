const prompt = require("prompt-sync")()

let ladoA = Number(prompt("Informe o primeiro numero: "));
let ladoB = Number(prompt("Iforme o segundo numero: "));
let ladoC = Number(prompt("Informe o terceiro numero: "));

console.log(`Lado A : ${ladoA}`);
console.log(`Lado B : ${ladoB}`);
console.log(`Lado C : ${ladoC}`);

let cond1 = (ladoA+ladoB) > ladoC;
let cond2 = (ladoA+ladoC) > ladoB;
let cond3 = (ladoB+ladoC) > ladoA;

if (cond1 && cond2 && cond3){
    console.log(`Lados podem formar um triangulo!`);

    let equi = (ladoA == ladoB && ladoB == ladoC && ladoA == ladoC);
    let esca = (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC);
   
    let iso1 = (ladoA == ladoB);
    let iso2 = (ladoA == ladoC);
    let iso3 = (ladoB == ladoC);

    if (equi){
        console.log(`Tipo: Equilatero.`);
    } else if (esca){ 
        console.log(`Tipo: Escaleno.`);
    } else if (iso1 || iso2 || iso3){
        console.log(`Tipo: Isosceles.`);
    }
} else{
    console.log(`Lados não podem formar um triangulo. `);
}