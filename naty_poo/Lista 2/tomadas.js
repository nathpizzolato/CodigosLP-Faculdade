const input = require('fs').readFileSync('teste.txt', 'utf8');
const [n1, n2, n3, n4] = input.split(' ').map(v => +v);


console.log(n1 + n2 + n3 + n4 - 3);