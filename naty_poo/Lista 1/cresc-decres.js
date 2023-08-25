var input = require('fs').readFileSync('teste.txt', 'utf8');
var lines = input.split('\n');

const n1 = +lines[0];
const n2 = +lines[1]

while (true) {
    if(n1 > n2){
        console.log("Decrescente");
    }else if(n1 < n2){
        console.log("Crescente");
    }else{
        break;
    }
}

