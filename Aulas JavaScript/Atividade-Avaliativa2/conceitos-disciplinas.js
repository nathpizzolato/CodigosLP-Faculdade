const prompt = require("prompt-sync")()

console.log();
console.log("REGISTRO DE NOTAS");
console.log();

let continua;
let conceitoA = "";
let conceitoB = "";
let conceitoC = "";
let conceitoD = "";

do{
    const disciplina = prompt("Disciplina: ");
    const conceito = prompt("Conceito: ").toUpperCase() ;

    if(conceito == "A"){
        conceitoA = conceitoA + disciplina + " ";
    } else if(conceito == "B"){
        conceitoB = conceitoB + disciplina + " ";
    }else if(conceito == "C"){
        conceitoC = conceitoC + disciplina + " ";
    }else{
        conceitoD = conceitoD + disciplina + " ";
    }

    
    console.log();
    continua = prompt("Continuar (S/N): ")
    console.log();
}while(continua.toUpperCase() == "S")

const filtro = prompt("Qual conceito filtrar: ").toUpperCase();
console.log();

if(filtro == "A"){
    console.log(`Disciplinas com A`);
    console.log("-".repeat(20));
    console.log(`${conceitoA}`);
    console.log();
    console.log(`Outros Conceitos`);
    console.log("-".repeat(20));
    console.log(`${conceitoB} - B`);
    console.log(`${conceitoC} - C`);
    console.log(`${conceitoD} - D`);
}else if(filtro == "B"){
    console.log(`Disciplinas com B`);
    console.log("-".repeat(20));
    console.log(`${conceitoB}`);
    console.log();
    console.log(`Outros Conceitos`);
    console.log("-".repeat(20));
    console.log(`${conceitoA} - A`);
    console.log(`${conceitoC} - C`);
    console.log(`${conceitoD} - D`);
}else if(filtro == "C"){
    console.log(`Disciplinas com C`);
    console.log("-".repeat(20));
    console.log(`${conceitoC}`);
    console.log();
    console.log(`Outros Conceitos`);
    console.log("-".repeat(20));
    console.log(`${conceitoA} - A`);
    console.log(`${conceitoB} - B`);
    console.log(`${conceitoD} - D`);
}else{
    console.log(`Disciplinas com D`);
    console.log("-".repeat(20));
    console.log(`${conceitoD}`);
    console.log();
    console.log(`Outros Conceitos`);
    console.log("-".repeat(20));
    console.log(`${conceitoA} - A`);
    console.log(`${conceitoB} - B`);
    console.log(`${conceitoC} - C`);
}