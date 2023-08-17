const input = require('fs').readFileSync('stdin.txt','utf8');
const lines = input.split('\n');

let senha = '';

do{
    senha = lines.shift();
    if(senha == '2002'){
        console.log('Acesso Permitido');
    }else{
        console.log('Senha Invalida');
    }

}while(senha != '2002')