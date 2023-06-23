// primeira parte

const numeros = [10,13,25,36,42,45,50];
const numeros2 = numeros.map(num => Math.ceil(num/2));

console.log(numeros.join(", "));
console.log(numeros2.join(", "));

// segunda parte

const numeros3 = [30,20,25,32,42,15,50];
const numeros4 = numeros.filter(num => num > numeros[0]);

console.log(numeros3.join(", "));
if(numeros4.length == 0){
    console.log(`Não há numeros maiores que ${numeros3[0]} `);
}else{
    console.log(numeros4.join(", "));
}
