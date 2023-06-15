const numero =[30,20,25,32,42,15,50];

const maior = [];

for(const num of numero){
    if(num > numero[0]){
        maior.push(num);
    }
}

if(maior.length == 0){
    console.log("Não existem numeros maiores");
}else{
    console.log("Numeros maiores que", numero[0], ":", maior.join(", "));
}