const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let [anoes, km] = lines.shift().split(" ");

anoes = +anoes + 2;

console.log((km / anoes).toFixed(2));