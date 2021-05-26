const calculate = fn => new Function('return ' + fn)()

export class Calculator {
    constructor(options) {
        this.rootId = options.rootId
        this.cellClass = options.cellClass
        this.bigClass = options.bigClass
        this.container = document.getElementById(this.rootId)
        this.valoareInitiala = ''
        this.cells = []
        this.cifreContainer = null
        this.display = null
        this.cifre = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']
        this.operatii = ['+', '-', '*', '/']
    }

    init() {
        this.display = document.createElement('input')
        this.display.classList.add('display')
        this.display.value = this.valoareInitiala
        this.container.appendChild(this.display)

        this.principalContainer = document.createElement('div')
        this.principalContainer.classList.add('principal-container')
        this.container.appendChild(this.principalContainer)

        this.cifreContainer = document.createElement('div')
        this.cifreContainer.classList.add('cifre-container')
        this.principalContainer.appendChild(this.cifreContainer)
        
        this.cifre.forEach(cifra => this.addCifra(cifra))
        this.addEgal()

        this.operatiiContainer = document.createElement('div')
        this.operatiiContainer.classList.add('operatii-container')
        this.principalContainer.appendChild(this.operatiiContainer)
        

        this.operatii.forEach(operatie => this.addOperatie(operatie))

        this.actiuniContainer = document.createElement('div')
        this.actiuniContainer.classList.add('actiuni-container')
        this.principalContainer.appendChild(this.actiuniContainer)

        const curata = document.createElement('div')
        curata.classList.add(this.cellClass)
        curata.classList.add(this.bigClass)
        curata.setAttribute('role', 'button')
        curata.setAttribute('tabindex', 0)
        curata.setAttribute('aria-pressed', false)
        curata.innerText = 'C'
        curata.addEventListener('click', () => {
            this.display.value = this.valoareInitiala
        })
        this.actiuniContainer.appendChild(curata)
        this.cells.push(curata)

        const sterge = document.createElement('div')
        sterge.classList.add(this.cellClass)
        sterge.classList.add(this.bigClass)
        sterge.setAttribute('role', 'button')
        sterge.setAttribute('tabindex', 0)
        sterge.setAttribute('aria-pressed', false)
        sterge.innerText = '<='
        sterge.addEventListener('click', () => {
          this.display.value = this.display.value.slice(0, -1)
        })
        this.actiuniContainer.appendChild(sterge)
        this.cells.push(sterge)
    }
    
    addEgal() {
        const item = document.createElement('div')
        item.classList.add(this.cellClass)
        item.setAttribute('role', 'button')
        item.setAttribute('tabindex', 0)
        item.setAttribute('aria-pressed', false)
        item.innerText = '='
        item.addEventListener('click', () => {
          this.display.value = calculate(
            this.operatii.includes(this.display.value.slice(-1)) ? 
              this.display.value.slice(0, -1):
              this.display.value
            )
        })
        this.cifreContainer.appendChild(item)
        this.cells.push(item)
    }

    addOperatie(operatie) {
        const item = document.createElement('div')
        item.classList.add(this.cellClass)
        item.setAttribute('role', 'button')
        item.setAttribute('tabindex', 0)
        item.setAttribute('aria-pressed', false)
        item.addEventListener('click', event => {
          const operatie = event.target.innerText
          const { value } = this.display
          if ( this.operatii.includes(value.slice(-1)) ) {
            this.display.value = value.slice(0, -1) + operatie
          } else {
           this.display.value = `${value}${operatie}`
          }
       })
        item.innerText = operatie
        this.operatiiContainer.appendChild(item)
        this.cells.push(item)
    }

    addCifra(cifra) {
        const item = document.createElement('div')
        item.classList.add(this.cellClass)
        item.innerText = cifra
        item.setAttribute('role', 'button')
        item.setAttribute('tabindex', 0)
        item.setAttribute('aria-pressed', false)
        item.addEventListener('click', () => {
          if(this.cifre.includes(cifra)) {
            this.display.value = this.display.value === '0' ? cifra : `${this.display.value}${cifra}`
          }
        })
        this.cifreContainer.appendChild(item)
        this.cells.push(item)
    }

    toggleCellState(cell) {
      cell.click();
    }   
}