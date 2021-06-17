export class Grid {
  constructor(options) {
    this.rootId = options.rootId;
    this.rootContainer = document.getElementById(this.rootId);
    this.cells = [];
  }

  init() {
    this.addDocumentMouseListeners();
    this.draw();
  }

  draw() {
    const fingerCounter = document.createElement('div');
    fingerCounter.id = 'finger-counter';
    this.rootContainer.appendChild(fingerCounter);
  }

  toggleCellState(cell) {
    cell.classList.toggle('active')
  }


  addDocumentMouseListeners() {
    document.addEventListener('mousedown', () => {
      this.isMouseDown = true;
    })
    document.addEventListener('mouseup', () => {
      this.isMouseDown = false;
    })
  }

}
