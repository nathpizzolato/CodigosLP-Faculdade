const numeros = [10,13,25,36,42,45,50];

const metade = [];

for(const num of numeros){
    if(num%2== 0){
        metade.push(num/2);
    }else{
        metade.push(Math.ceil(num/2));
    }
}

console.log(numeros.join(", "));
console.log(metade.join(", "));