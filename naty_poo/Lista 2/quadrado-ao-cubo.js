const input = require('fs').readFileSync('teste.txt', 'utf8');
const lines = input.split('\n');

const total = +lines[0];

for(let i=1; i <= total; i++){
    console.log(`${i} ${Math.pow(i,2)} ${Math.pow(i,3)}`);
}




