class Calculator {
    constructor(id) {
        this.valoareCurenta = '0';
        this.container = document.getElementById(id);
        this.cifreContainer = null;
        this.display = null;

        this.valoareAnterioara = null;
        this.operatieAnterioara = null;
    }

    draw() {
        this.display = document.createElement('input');
        this.display.classList.add('display')
        this.display.value = this.valoareCurenta;
        this.container.appendChild(this.display);

        this.principalContainer = document.createElement('div');
        this.principalContainer.classList.add('principal-container');
        this.container.appendChild(this.principalContainer);

        this.cifreContainer = document.createElement('div');
        this.cifreContainer.classList.add('cifre-container');
        this.principalContainer.appendChild(this.cifreContainer);

        this.cifreContainer.addEventListener('click', event =>{
            const cifra = event.target.innerText;
            this.valoareCurenta = this.valoareCurenta === '0' ? cifra : `${this.valoareCurenta}${cifra}`;
            this.display.value = this.valoareCurenta;
        })
        for(let i = 1; i<=9; i++){
            this.addCifra(i);
        }
        this.addCifra(0);


        this.operatiiContainer = document.createElement('div');
        this.operatiiContainer.classList.add('operatii-container');
        this.principalContainer.appendChild(this.operatiiContainer);

        this.actiuniContainer = document.createElement('div');
        this.actiuniContainer.classList.add('actiuni-container');
        this.principalContainer.appendChild(this.actiuniContainer);
     
        const operatii = ['+', '-', '*', '/', '='];
        operatii.forEach(semn => this.addOperatie(semn));
        this.operatiiContainer.addEventListener('click', event =>{
            const semn = event.target.innerText;
            if (this.valoareAnterioara) {

            }
            if ( semn === '=') {
                this.valoareCurenta = 
            } else {
                this.valoareAnterioara = this.valoareCurenta;
                this.operatieAnterioara = semn;
            }
        })

        const curata = document.createElement('div');
        curata.classList.add('cell')
        curata.classList.add('actiune')
        curata.innerText = 'C';
        curata.addEventListener('click', () => {
            this.setValoareCurenta('0');
        })
        this.actiuniContainer.appendChild(curata);
        


    }
    calculate() {
        switch(this.operatieAnterioara) {
            case '+':
               return (parseFloat(this.valoareCurenta) + parseFloat(this.valoareAnterioara));
            break;
        }
    }

    setValoareCurenta(valoare) {
        this.valoareCurenta = valoare;
        this.display.value = this.valoareCurenta;
    }
    addOperatie(semn) {
        const operatie = document.createElement('div');
        operatie.classList.add('cell')
        operatie.innerText = semn;
        this.operatiiContainer.appendChild(operatie);
    }
    addCifra(index) {
        const cifra = document.createElement('div')
        cifra.classList.add('cell')
        cifra.innerText = index
        this.cifreContainer.appendChild(cifra);
    }
}

const calculator = new Calculator('container')
calculator.draw()