//percorrer vetor usando outra forma for(variavel of nomeVetor)
const numeros = [10, 15, 20, 30, 35];

console.log(`1º numero da lista: ${numeros[0]}`);
console.log(`Tamanho da lista: ${numeros.length}`);
console.log(`Ultimo numero da lista: ${numeros[4]}`);

numeros.push(40); //adiciona numero no final da lista
numeros.unshift(5); //adiciona numero no inicio da lista

console.log("\nNumeros da Lista");
for(let num of numeros){
    console.log(num);
}