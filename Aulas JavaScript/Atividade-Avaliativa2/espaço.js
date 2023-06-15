const prompt = require("prompt-sync")()

const numero = Number(prompt("Informe um numero: "));

let direita = "";
let esquerda = "";
let meio = "*";
let total = "";
let numero2 = 0;

if(numero%2 == 0){
    for(let i=1; i<=(numero/2); i++){
        direita = direita + "]";
    }
    for(let i=(numero/2); i>=1; i--){
        esquerda = esquerda + "["
    }
    
    total = esquerda + direita;
} else{
    numero2 = (numero-1);
    for(let i=1; i<=(numero2/2); i++){
        direita = direita + "]";
    }
    for(let i=(numero2/2); i>=1; i--){
        esquerda = esquerda + "[";
    }

    total = esquerda + meio + direita;
}

console.log(`Numero: ${numero}`);
console.log(`Resposta: ${total}`);