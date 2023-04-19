const prompt = require("prompt-sync")()

console.log("--------------------------------")
console.log("Parquimetro - Tabela de Valores");
console.log("   R$1.00 --- 30 minutos");
console.log("   R$1.75 --- 60 minutos");
console.log("   R$3.00 --- 120 minutos");
console.log("--------------------------------");

let valor = Number(prompt("Insira o valor desejado: "));
console.log("--------------------------------");
console.log(`Valor inserido: R$${valor.toFixed(2)}`)

let troco = 0;
if (valor < 1.00){
    console.log(`Valor insuficiente, minimo R$1.00`);
    troco = valor 
    console.log(`Valor devolvido: R$${troco}`);
}else if(valor < 1.75){
    console.log(`Tempo de permanencia: 30 minutos`);
    troco = valor - 1.00
}else if(valor < 3.00){
    console.log(`Tempo de permanencia: 60 minutos`);
    troco = valor - 1.75
}else{
    console.log(`Tempo de permanencia: 120 minutos`);
    troco = valor - 3.00
}
if (troco != 0){
    console.log(`Troco: R$${troco}`);
}
console.log(`--------------------------------`);