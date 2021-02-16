let a = 10
let b = 15
let c = 16
let d = 5005
let e = 52390903


let tableau = [a, b, c, d, e]

for(let i = 0; i < tableau.length; i++) {
  console.log(`${tableau[i]} en base binaire = ${tableau[i].toString(2)}`)
  console.log(`${tableau[i]} en base octal = ${tableau[i].toString(8)}`)
  console.log(`${tableau[i]} en base hexadécimal = ${tableau[i].toString(16)}\n`)
}