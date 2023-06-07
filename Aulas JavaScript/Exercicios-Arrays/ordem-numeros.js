//Elaborar um programa que leia 5 números. Ao final, listar os números e informar se eles estão em
//ordem crescente ou não estão em ordem crescente.

const prompt = require("prompt-sync")()

const numeros = [];

for(let i=0; i<=4; i++){
    numeros[i] = prompt(`${i+1}º Numero: `);
}

let foraordem = 0;
//faz o i <=3 porque queremos comparar uma posição com a outra
//se deixasse 4 ele tentaria comprar o 4 com o 5 mas ele n existe
for(let i=0; i<=3; i++){
    if(numeros[i] > numeros[i+1]){
        foraordem = 1;
    }
}

if(foraordem == 0){
    console.log("Numeros estão em ordem!");
}else{
    console.log("Numeros NÃO estão em ordem!");
}


