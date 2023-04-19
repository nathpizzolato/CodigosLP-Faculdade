const prompt = require("prompt-sync")()

const crianca = prompt("Informe o nome da criança: ");
const peso = Number(prompt("Informe o peso da criança: "));
const gotas = Math.floor(peso)*2;

console.log(`Nome da criança:${crianca}`);
console.log(`Peso: ${peso} KG`);

if(gotas <= 30){
    console.log(`${crianca} deve tomar ${gotas} gotas.`);
}else if(gotas > 30){
    console.log(`Numero de gotas: ${gotas}`);
    console.log(`Atenção! O máximo de gotas permitidas é 30, consulte seu médico.`);
}