const prompt = require("prompt-sync")()

const entrada = Number(prompt("Entrada do veiculo:"));
const saida = Number(prompt("Saida do veiculo:"));
const hora = Math.ceil((saida-entrada));
const pagar = hora*5;

console.log(`Horario de entrada: ${entrada}h, Horario de saida: ${saida}h. Cobrar: ${hora}horas. Valor R$:${pagar}`);