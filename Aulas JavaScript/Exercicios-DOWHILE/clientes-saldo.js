//2. Elaborar um programa que leia nome e saldo da conta de ‘n’ clientes. Ao final, informe quantos
//clientes estão com o saldo negativo na conta. Caso nenhum cliente esteja com saldo negativo
//informe “Não há clientes com saldo negativo”.

const prompt = require("prompt-sync")()

let negativo = 0;
let continua;
let nome;
do{
    console.log("-".repeat(40));
    nome = prompt("Nome do cliente ou 'FIM' para sair: ");
    if(nome == "FIM"){
        console.log("FINALIZANDO SISTEMA...");
        console.log("-".repeat(40));
    }else{
        const saldo = Number(prompt("Saldo R$: "));
        console.log("-".repeat(40));
        console.log();
        if(saldo < 0 ){
            negativo = negativo + 1;
        }
        continua = prompt("Deseja continuar S/N: ");
        console.log();
    }
    
}while(continua == "S")

if(nome == "FIM"){
    console.log();
}else{
    console.log("-".repeat(40));
    console.log(`Numero de clientes com saldo negativo: ${negativo}`);
    console.log("-".repeat(40));
}
