const prompt = require("prompt-sync")()

const num = Number(prompt("Número: "))

console.log(`\nTabuada do ${num}`)
//console.log("------------------------")
console.log("-".repeat(30))

for (let i=1; i <= 10; i = i + 1) {
  console.log(`${num} x ${i} = ${num*i}`)
//  prompt()
}

/* -------------------------
i = i + 1   ou   i++   ou   i += 1
i = i + 2              ou   i += 2

i = i - 1   ou   i--   ou   i -= 1
i = i - 2              ou   i -= 2
---------------------------- */

