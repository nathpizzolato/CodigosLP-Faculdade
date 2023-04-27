const prompt = require("prompt-sync")()

const nome = prompt("Informe o nome do paciente: ");
const sexo = prompt("Informe o sexo do paciente (M ou F): ");
const altura = Number(prompt("Informe a altura do paciente: "));

console.log(`Nome: ${nome}`);
console.log(`Sexo: ${sexo}`);
console.log(`Altura: ${altura.toFixed(2)}`);

let peso
try{
switch (sexo){
    case "M":
        peso = (72.7*altura)-58;
        break;
    case "m":
        peso = (72.7*altura)-58;
        break;
    case "F":
        peso = (62.1*altura)-44.7;
        break;
    case "f":
        peso = (62.1*altura)-44.7;
        break;
}
console.log(`Peso Ideal: ${peso.toFixed(2)}kg`);
}catch(Exception) {
    console.log(`Informação incorreta utilize M ou F.`);
    }
