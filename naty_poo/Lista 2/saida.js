var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (let i = 97; i <= 122; i++) {
  console.log(`${i} e ${String.fromCharCode(i)}`);
}
