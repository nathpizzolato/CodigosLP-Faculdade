/*Leia um valor inteiro N que é a quantidade de casos de teste que vem a seguir. 
Cada caso de teste consiste de dois inteiros X e Y. 
Você deve apresentar a soma de Y ímpares consecutivos a partir de X 
inclusive o próprio X se ele for ímpar. Por exemplo:
para a entrada 4 5, a saída deve ser 45, que é equivalente à: 5 + 7 + 9 + 11 + 13
para a entrada 7 4, a saída deve ser 40, que é equivalente à: 7 + 9 + 11 + 13
Imprima a soma dos consecutivos números ímpares a partir do valor X.*/

var input = require('fs').readFileSync('stdin,txt', 'utf8');
var lines = input.split('\n');

