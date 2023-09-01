/*Imprima o tempo lido no arquivo de entrada (segundos), 
convertido para horas:minutos:segundos, 
conforme exemplo fornecido.*/

var input = require('fs').readFileSync('stdin.txt', 'utf8');
var lines = input.split('');

const tempo = +lines[0];

const hora = Math.round(tempo/3600);
console.log(hora);

const minutos = (tempo/60);
console.log(minutos);

const segundos = (tempo-minutos);
console.log(segundos);

/*console.log(`${hora}:${minutos}:${segundos}`);*/



