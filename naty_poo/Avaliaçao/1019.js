/*Imprima o tempo lido no arquivo de entrada (segundos), 
convertido para horas:minutos:segundos, 
conforme exemplo fornecido.*/

var input = require('fs').readFileSync('stdin.txt', 'utf8');
var lines = input.split("\n");

const tempo = +lines[0];
console.log(lines);

const hora = Math.floor(tempo/60/60);
const minutos = Math.floor(tempo/60 - hora*60);
const segundos = Math.floor(tempo - hora*60 * 60 - minutos*60);

console.log(`${hora}:${minutos}:${segundos}`);



