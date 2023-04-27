const prompt = require("prompt-sync")()

const numero = Number(prompt("Insira o numero: "));

console.log(`Numero ${numero}`);
let raiz = Math.sqrt(numero)
let result = raiz%2;

switch (result){
    case 0: 
        console.log(`A raiz quadrada é: ${raiz}`);
        break;
    default:
        console.log(`${numero} não possui raiz exata.`);
        break;
}
