//Elaborar um programa que leia nome e idade de ‘n’ clientes de um banco, até ser digitado ‘Fim’ no
//nome. Sabendo que os clientes acima de 60 anos devem ser chamados primeiro, exibir a lista de clientes
//por ordem de chamada.

const prompt = require("prompt-sync")()

const cliente = [];
const idade = [];

while(true){
    const x = prompt("Nome do Cliente ou FIM para finalizar: ");
    if(x.toUpperCase() == "FIM"){
        console.log("Sistema finalizado");
        break
    }
    const y = Number(prompt("Idade do Cliente: "));

    cliente.push(x);
    idade.push(y);
}
console.log();

console.log("Ordem de Chamada");
console.log("-".repeat(20));
for(let i = 0; i <= idade.length; i++){
    if(idade[i] >= 60){
        console.log(`${cliente[i]}`);
    }
}
for(let i = 0; i <= idade.length; i++){
    if(idade[i] < 60){
        console.log(`${cliente[i]}`);
    }
}