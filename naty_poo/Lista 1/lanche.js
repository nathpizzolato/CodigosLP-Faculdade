var input = require('fs').readFileSync('teste.txt', 'utf8');
var lines = input.split('');

let total;
const codigo = +lines[0];
const quantidade = +lines[1];

if(codigo == 1){
    total = (4 * quantidade).toFixed(2);
    console.log(`Total: R$ ${total}`);
}else if(codigo == 2){
    total = (4.50 * quantidade).toFixed(2);
    console.log(`Total: R$ ${total}`);
}else if(codigo == 3){
    total = (5 * quantidade).toFixed(2);
    console.log(`Total: R$ ${total}`);
}else if(codigo == 4){
    total = (2 * quantidade).toFixed(2);
    console.log(`Total: R$ ${total}`);
}else if(codigo == 5){
    total = (1.50 * quantidade).toFixed(2);
    console.log(`Total: R$ ${total}`);
}else{
    console.log("Codigo do produto inválido");
}
