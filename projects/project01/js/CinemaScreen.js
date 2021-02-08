class CinemaScreen {
  constructor() {
    this.translateX = 25;
    this.translateY = -200;
    this.translateZ = -300;
    this.width = 600;
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
