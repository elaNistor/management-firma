class AngajatIT  {
    constructor(CNP, nume, prenume, vechime, departament) {
        this.CNP=CNP
        this.nume=nume
        this.prenume=prenume
        this.vechime=vechime
        this.departament=departament
    }
    afiseazaVarsta() {
        const acuma = new Date();
        const anulCurent = acuma.getFullYear()
        const anulNasteri = `${this.CNP}`.substr(1,2)
        console.log(`Varsta ${anulCurent - 1900 - anulNasteri}`)
    }
    
    afișeazăAnulAngajarii() {
        const acuma = new Date();
        const anulCurent = acuma.getFullYear()
        console.log(`Anul angajari ${anulCurent - this.vechime}`)
    }


    lucrează() {
        console.log("Neimplementat")
    }
}

const mihaela=new AngajatIT(180456,"Nistor","Mihaela",3,"IT")
mihaela.afiseazaVarsta()


class QA extends AngajatIT{
    constructor(){
        super()
    }
    lucrează(){
        console.log("testează software")
    }
}

const stefan=new QA(1980,"Stefan","Stefan",2,"QA")
stefan.lucrează()


class Developer extends AngajatIT{
    constructor(){
        super()
    }
    lucrează(){
        console.log("scrie cod")
    }
}
const sorin=new Developer( 248091, "Neculae","Sorin",7, "Web")
sorin.lucrează()