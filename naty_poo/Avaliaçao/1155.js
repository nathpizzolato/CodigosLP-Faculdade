/*Escreva um algoritmo para calcular e escrever o valor de S, 
sendo S dado pela fórmula: S = 1 + 1/2 + 1/3 + … + 1/100
O valor deve ser impresso com dois dígitos após o ponto decimal.*/

let S = 1;

for(i=2; i<=100; i++){
    S = S + 1/i;
}

console.log(S.toFixed(2));