import { Grid } from './grid.js';
import HandDetection from './hand_detection.js';

export default class App {
  init() {
    this.initializeGrid();
    this.initializeToneSynth();
    this.initializeMediaPipe();
  }

  initializeGrid() {
    this.grid = new Grid({
      rootId: 'main-container',
    });

    this.grid.init();
  }
  
  initializeToneSynth() {
    this.synth = new Tone.Synth().toDestination();    
  }

  initializeMediaPipe() {
    const handDetection = new HandDetection(this.grid, this.synth);
    handDetection.init();
  }


}
