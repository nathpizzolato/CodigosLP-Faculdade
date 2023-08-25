const num = +lines.shift();

let somador = 0;
for (let i = 1; i <= num + 1; i++) {
  somador += i;
}
console.log(somador);