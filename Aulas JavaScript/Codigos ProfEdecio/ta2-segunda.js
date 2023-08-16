const prompt = require("prompt-sync")()

let crianca = 0;
let totalGotas = 0;

do{
    const nome = prompt("Criança: ");
    const gotas = Number(prompt("Gotas: "));
    console.log(`${nome}, vacinado(a) com ${gotas} gotas.`);

    crianca++;
    totalGotas = totalGotas + gotas;

    const continua = prompt("Continuar (S/N): ").toUpperCase();
    if(continua == "N"){
        break;
    }

}while(true)

const frasco = Math.ceil(totalGotas/30);

console.log(`Crianças vacinadas: ${crianca}`);
console.log(`Total de gotas: ${totalGotas}`);
console.log(`Numero de frascos: ${frasco}`);