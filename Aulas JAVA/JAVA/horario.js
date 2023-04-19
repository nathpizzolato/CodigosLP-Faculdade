const prompt = require("prompt-sync")()

let horaB = Number(prompt("Informe que horas são no Brasil: "));
let horaF = horaB + 5

if (horaF > 24){
    horaF = horaF - 24;
}

console.log(`Hora no Brasil: ${horaB}`);
console.log(`Hora na França: ${horaF}`);

