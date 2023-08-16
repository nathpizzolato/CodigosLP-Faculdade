const prompt = require("prompt-sync")();

const padrao = 1234;
let contador = 0;

const nome = prompt("Funcionario: ");
let senha;
do{
    senha = Number(prompt("Senha: "));

    if(senha != padrao ){
        contador = contador +1;
    }

}while(senha != padrao)

if(contador == 0){
    console.log(`Não errou a senha nenhuma vez.`);
}else{
    console.log(`${nome} errou ${contador} vezes a senha!`);
}
