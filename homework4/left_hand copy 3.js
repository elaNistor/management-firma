export default class LeftHand {
  constructor() {
    this.counters = [0, 0, 0, 0, 0];
  }

  updateLandmarks(landmarks) {
    // doar la degetul mare verificam pozitia pe axa orizontala.
    this.counters[0] = landmarks[4] && landmarks[3] && (landmarks[4].x > landmarks[3].x) ? 0 : 1;
    this.counters.slice(1).forEach(( v, index ) => {
      const writsnumber = (index + 1) * 4;
      // verificam distanta intre incheieturile alaturate
      this.counters[index+1] = landmarks[writsnumber] && landmarks[writsnumber-1] && (landmarks[writsnumber].y > landmarks[writsnumber-1].y) ? 0 : 1; 
    });
    document.getElementById('finger-counter').innerText = this.counters.reduce((a,b) => a + b, 0);

  }

  draw(ctx) {
    drawLandmarks(ctx, this.landmarks, {
      color: "lightblue",
      lineWidth: 1,
    });
  }
}