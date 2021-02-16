let tableau = [10, 15, 16, 5005, 52390903]

for(let i = 0; i < tableau.length; i++) {
  console.log(`${tableau[i]} en base binaire = ${tableau[i].toString(2)}`)
  console.log(`${tableau[i]} en base octal = ${tableau[i].toString(8)}`)
  console.log(`${tableau[i]} en base hexadécimal = ${tableau[i].toString(16)}\n`)
}