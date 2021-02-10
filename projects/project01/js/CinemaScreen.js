class CinemaScreen {
  constructor() {
    this.translateX = 0;
    this.translateY = -175;
    this.translateZ = -400;
    this.width = 700;
    this.height = 400;
    this.fill = 0;
  }
  display() {
    push();
    translate(this.translateX, this.translateY, this.translateZ);
    fill(this.fill);
    plane(this.width, this.height);
    pop();
  }
}
