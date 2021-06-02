export default class LeftHand {
  constructor() {
    this.counters = [0, 0, 0, 0, 0];
    this.maxDistance = 0.02 * 2;
  }

  updateLandmarks(landmarks) {
    this.landmarks = landmarks;
    
    const { x: thumbTipX, y: thumbTipY } = landmarks[4];
    const { x: thumbMcpX, y: thumbMcpY } = landmarks[1];
    const thumbDistance = Math.sqrt(Math.pow((thumbTipX - thumbMcpX), 2) + Math.pow((thumbTipY - thumbMcpY), 2));
    this.counters[0] = thumbDistance < this.maxDistance*2 ? 0 : 1;

    const { x: indexTipX, y: indexTipY } = landmarks[8];
    const { x: indexMcpX, y: indexMcpY } = landmarks[5];
    const indexDistance = Math.sqrt(Math.pow((indexTipX - indexMcpX), 2) + Math.pow((indexTipY - indexMcpY), 2));
    this.counters[1] = indexDistance < this.maxDistance ? 0 : 1;

    const { x: middleTipX, y: middleTipY } = landmarks[12];
    const { x: middleMcpX, y: middleMcpY } = landmarks[9];
    const middleDistance = Math.sqrt(Math.pow((middleTipX - middleMcpX), 2) + Math.pow((middleTipY - middleMcpY), 2));
    this.counters[3] = middleDistance < this.maxDistance ? 0 : 1;

    const { x: ringTipX, y: ringTipY } = landmarks[16];
    const { x: ringMcpX, y: ringMcpY } = landmarks[13];
    const ringDistance = Math.sqrt(Math.pow((ringTipX - ringMcpX), 2) + Math.pow((ringTipY - ringMcpY), 2));
    this.counters[3] = ringDistance < this.maxDistance ? 0 : 1;

    const { x: pinkyTipX, y: pinkyTipY } = landmarks[20];
    const { x: pinkyMcpX, y: pinkyMcpY } = landmarks[17];
    const pinkyDistance = Math.sqrt(Math.pow((pinkyTipX - pinkyMcpX), 2) + Math.pow((pinkyTipY - pinkyMcpY), 2));
    this.counters[4] = pinkyDistance < this.maxDistance ? 0 : 1;

    document.getElementById('finger-counter').innerText = this.counters.reduce((a,b) => a + b, 1);

  }

  draw(ctx) {
    drawLandmarks(ctx, this.landmarks, {
      color: "lightblue",
      lineWidth: 1,
    });
  }
}