const numere = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numereNoi = numere.map(valoare => valoare + 15*valoare)

numereNoi.forEach((v) => {
    console.log(v)
})


const numereModificate = [...numere]
numereModificate[2] = 22;
numereModificate[6] = 66;

numereModificate.forEach((v) => {
    console.log(v)
})
