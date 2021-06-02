export default class LeftHand {
  constructor() {
    this.counters = [0, 0, 0, 0, 0];
  }

  updateLandmarks(landmarks) {
    // doar la degetul mare verificam pozitia pe axa orizontala
    this.counters[0] = landmarks[4] && landmarks[3] && (landmarks[4].x > landmarks[3].x) ? 0 : 1;
    // verificam distanta intre incheieturile alaturate
    this.counters[1] = landmarks[8] && landmarks[7] && (landmarks[8].y > landmarks[7].y) ? 0 : 1;
    this.counters[2] = landmarks[12] && landmarks[11] && (landmarks[12].y > landmarks[11].y) ? 0 : 1;
    this.counters[3] = landmarks[16] && landmarks[15] && (landmarks[16].y > landmarks[15].y) ? 0 : 1;
    this.counters[4] = landmarks[20] && landmarks[19] && (landmarks[20].y > landmarks[19].y) ? 0 : 1;
    document.getElementById('finger-counter').innerText = this.counters.reduce((a,b) => a + b, 0);

  }

  draw(ctx) {
    drawLandmarks(ctx, this.landmarks, {
      color: "lightblue",
      lineWidth: 1,
    });
  }
}