const prompt = require("prompt-sync")()

const numero = Number(prompt("Numero: "));

let abre = "";
let fecha = "";
const metade = numero/2;

for(let i=1; i<=metade; i++){
    abre = abre + "[";
    fecha = fecha + "]";
}

if(numero%2 == 0){
    console.log(`Resposta: ${abre}${fecha}`);
}else{
    console.log(`Resposta: ${abre}*${fecha}`);
}