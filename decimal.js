let hexa = 0x123
let octal = 0123
let binaire = 0b10011001
let hexa2 = 0xdeadbeef
let hexa3 = 0xea7beef
let binaire2 = 0b1111111111111111
let octal2 = 0777

let tableau = [hexa, octal, binaire, hexa2, hexa3, binaire2, octal2]

for(let i = 0; i < tableau.length; i++)
  console.log(tableau[i].toString(10))