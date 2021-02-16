let trucChiantALire = "Je suis le ténébreux, - le veuf, - l'inconsolé,\rLe prince d'Aquitaine à la tour abolie :\rMa seule étoile est morte, - et mon luth constellé\rPorte le soleil noir de la Mélancolie.\r\rDans la nuit du tombeau, toi qui m'as consolé,\rRends-moi le Pausilippe et la mer d'Italie,\rLa fleur qui plaisait tant à mon cœur désolé,\rEt la treille où le pampre à la rose s'allie.\r\rSuis-je Amour ou Phébus ? ... Lusignan ou Biron ?\rMon front est rouge encor du baiser de la reine ;\rJ'ai rêvé dans la grotte où nage la sirène...\r\rEt j'ai deux fois vainqueur traversé l'Achéron ;\rModulant tour à tour sur la lyre d'Orphée\rLes soupirs de la sainte et les cris de la fée."
let countE = 0

for(let i = 0; i < trucChiantALire.length; i++) {
  if(trucChiantALire[i].toLowerCase() === 'e')
    countE++
}

console.log(`il y a ${countE} 'e' dans le texte très chiant à lire`)