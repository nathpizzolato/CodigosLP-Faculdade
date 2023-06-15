const prompt = require("prompt-sync")()

console.log();
console.log("CAMPANHA DE VACINAÇÃO:");
console.log("-".repeat(30));

let totalG = 0;
let totalC = 0;
let continua;

 do{
    const crianca = prompt("Criança: ");
    const gotas = Number(prompt("Nº de gotas: "));

    console.log();
    console.log(`${crianca} vacinado(a) com ${gotas} gotas.`)

    totalC = totalC + 1;
    totalG = totalG + gotas;
    
    console.log();
    continua = prompt("Continuar (S/N): ");
    console.log();
 }while(continua.toUpperCase() == "S")

 console.log(`Crianças vacinadas: ${totalC}`);
 console.log(`Total de gotas: ${totalG}`);

 const frasco = Math.ceil(totalG/30);
 console.log(`Nº de frascos: ${frasco}`);
 



