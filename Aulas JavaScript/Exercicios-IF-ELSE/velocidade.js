const prompt = require("prompt-sync")()

let velocidade = Number(prompt("Informe a velocidade permitida da estrada: "));
let condutor = Number(prompt("Informe a velocidade do condutor: "));
let port = velocidade * 0.20
let somaPort = velocidade + port

console.log(`Velocidade permitida: ${velocidade}`);
console.log(`Velocidade do condutor: ${condutor}`);

if (condutor <= velocidade){
    console.log(`Situação: Sem Multa.`);
} else if(condutor > velocidade){
    if(condutor <= somaPort){
        console.log(`Situação: Multa Leve.`);
    }else{ 
        console.log(`Situação: Multa Grave.`);
    }
}

