const prompt = require("prompt-sync")()

//declara 2 vetores: produtos e valores 
// vetores começam com 0 então se um vetor tem tamanho 5, então suas posiçoes seram 0 1 2 3 4
const produtos = [];
const preco = [];
let continua;
let soma = 0;

do{
    const x = prompt("Produto: ");
    const y = Number(prompt("Preço R$: "));
    soma = soma + y;

    //adiciona estas variaveis aos vetores
    produtos.push(x);
    preco.push(y);

    continua = prompt("Continua (S/N): ").toUpperCase();
}while(continua == "S")

console.log();
console.log("-".repeat(30));

//lenght para descobrir o tamanho do vetor
for(let i = 0; i < produtos.length; i++){
    console.log(`${produtos[i].padEnd(20)} ${preco[i].toFixed(2).padStart(20)}`);
}

console.log("-".repeat(31));
console.log(`Total..........R$ ${soma.toFixed(2).padStart(10)}`);