const prompt = require("prompt-sync")()

const numero = Number(prompt("Informe um numero: "));

let guarda = "";
if(numero < 0){
    for(let i=numero; i<= (-numero); i++){
        guarda = guarda + i + " ";
    } 
    console.log(`Entre ${numero} e ${-numero}: ${guarda}`);
}else{
    for(let i=numero; i>= (-numero); i--){
        guarda = guarda + i + " ";
    }
    console.log(`Entre ${numero} e ${-numero}: ${guarda}`);
}