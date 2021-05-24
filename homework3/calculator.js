class Calculator {
    constructor(selector) {
        this.selector = selector;
        this.valoareCurenta = 0;
        this.container = document.getElementById(this.selector);
        this.cifreContainer = null;
        this.display = null;
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

        for(let i = 1; i<=9; i++){
            this.addCifra(i);
        }
        this.addCifra(0);


        this.operatiiContainer = document.createElement('div');
        this.operatiiContainer.classList.add('operatii-container');
        this.principalContainer.appendChild(this.operatiiContainer);

        const adunare = document.createElement('div');
        adunare.classList.add('cell')
        adunare.innerText = '+';
        this.operatiiContainer.appendChild(adunare);

        const scadere = document.createElement('div');
        scadere.classList.add('cell')
        scadere.innerText = '-';
        this.operatiiContainer.appendChild(scadere);

        const inmultire = document.createElement('div');
        inmultire.classList.add('cell')
        inmultire.innerText = '*';
        this.operatiiContainer.appendChild(inmultire);
        
        const impartire = document.createElement('div');
        impartire.classList.add('cell')
        impartire.innerText = '/';
        this.operatiiContainer.appendChild(impartire);

        const egal = document.createElement('div');
        egal.classList.add('cell')
        egal.innerText = '=';
        this.operatiiContainer.appendChild(egal);

        this.actiuniContainer = document.createElement('div');
        this.actiuniContainer.classList.add('actiuni-container');
        this.principalContainer.appendChild(this.actiuniContainer);

        const curata = document.createElement('div');
        curata.classList.add('cell')
        curata.classList.add('actiune')
        curata.innerText = 'C';
        curata.addEventListener('click', () => {
            this.valoareCurenta = 0;
            this.display.value = this.valoareCurenta;
        })
        this.actiuniContainer.appendChild(curata);
        

        const sterge = document.createElement('div');
        sterge.classList.add('cell')
        sterge.classList.add('actiune')
        sterge.innerText = '<=';
        this.actiuniContainer.appendChild(sterge);

    }

    addCifra(index) {
        const cifra = document.createElement('div')
        cifra.classList.add('cell')
        cifra.innerText = index
        cifra.addEventListener('click', ()=>{
            this.valoareCurenta = this.valoareCurenta * 10 + index
            this.display.value = this.valoareCurenta;
        })
        this.cifreContainer.appendChild(cifra);
    }
}

const calculator = new Calculator('container')
calculator.draw()