const prompt = require("prompt-sync")();

const numeros = [];

let par = "";
let impar =;
for(let i=0; i<10; i++){
    const x = Number(prompt(`${i+1}º numero: `));
    numeros.push[x];
}

for(let i=0; i<=(numeros.length); i++){
    if(numeros[i] % 2 == 0){
        const pares = numeros.filter(num => num % 2 == 0)

    }else{
        const impa
    }
}

const escolhe = prompt("Mostrar numeros pares ou impares (P/I)?");
if(escolhe.toUpperCase == "P"){
    console.log(`${par}`);
}else{
    console.log(`${impar}`);
}
