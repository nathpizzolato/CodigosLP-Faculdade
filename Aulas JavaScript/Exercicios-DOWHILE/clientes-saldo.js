//2. Elaborar um programa que leia nome e saldo da conta de ‘n’ clientes. Ao final, informe quantos
//clientes estão com o saldo negativo na conta. Caso nenhum cliente esteja com saldo negativo
//informe “Não há clientes com saldo negativo”.

const prompt = require("prompt-sync")()

let negativo = 0;
let continua;

do{
    const nome = prompt("Nome do cliente: ");
    const saldo = Number(prompt("Saldo R$: "));

    if(saldo < 0 ){
        negativo = negativo + 1;
    }
    continua = prompt("Deseja continuar S/N: ");
}while(continua == "S")

if(negativo == 0){
    console.log(`Não há clientes com saldo negativo!`);
}else{
    console.log(`Numero de clientes com saldo negativo: ${negativo}`);
}