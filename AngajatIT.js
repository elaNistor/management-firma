class AngajatIT  {
    constructor(CNP, nume, prenume, vechime, departament) {
        this.CNP=CNP
        this.nume=nume
        this.prenume=prenume
        this.vechime=vechime
        this.departament=departament
    }
    afiseazaVarsta() {
        console.log("Neimplementat ")
    }
    
    afișeazăAnulAngajarii() {
        console.log("Neimplementat")
    }


    lucrează() {
        console.log("Neimplementat")
    }
}

const mihaela=new AngajatIT(123456,"Nistor","Mihaela",3,"IT")
mihaela.afiseazaVarsta()


class QA extends AngajatIT{
    testeazăSoftware(){
        console.log("testează software")
    }
}

const stefan=new QA(1980,"Stefan","Stefan",2,"QA")
stefan.testeazăSoftware()


class Developer extends AngajatIT{
    scriecod(){
        console.log("scrie cod bun")
    }
}
const sorin=new Developer( 248091, "Neculae","Sorin",7, "Web")
sorin.scriecod()