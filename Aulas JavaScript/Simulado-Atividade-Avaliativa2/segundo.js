//Uma determinada loja pretende dobrar o número de seus funcionários a cada ano, nos próximos 5
//anos. Elaborar um programa que leia o número de funcionários em 2023. Informe a previsão do número
//de funcionários a cada ano, para os próximos 5 anos 

const prompt = require("prompt-sync")();
console.log();

const numero = Number(prompt("Nº de Funcionários em 2023: "));
let ano = 2023;
let func = numero;

console.log();
console.log("Previsão para os próximos 5 anos");
console.log("-".repeat(32));

for(i=1; i<=5; i++){
    ano = ano+1;
    func = func*2;
    console.log(`Em ${ano}: ${func} funcionários`);   
}