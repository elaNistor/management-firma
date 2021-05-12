const numere = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let indice=0; indice<numere.length; indice = indice + 1) {
    console.log(numere[indice] + 15*numere[indice])
}


const numereModificate = [...numere, 22, 66]

numereModificate.forEach((v) => {
    console.log(v)
})
