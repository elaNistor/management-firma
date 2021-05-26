import { Calculator } from './calculator.js';
import HandDetection from './hand_detection.js';

export default class App {
  init() {
    this.initializeCalculator();
    this.initializeMediaPipe();
  }

  initializeCalculator() {

    this.grid = new Calculator({
      rootId: 'grid-container',
      cellClass: 'grid-cell',
      bigClass: 'grid-big'
    })
    this.grid.init();
  }

  initializeMediaPipe() {
    const handDetection = new HandDetection(this.grid);
    handDetection.init();
  }
}
