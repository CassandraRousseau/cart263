class Stage {
  //Creating stage parameters
  constructor() {
    this.translateX = 0;
    this.translateY = 150;
    this.translateZ = -425;
    this.fill = 250;
    this.radiusX = 500;
    this.radiusY = 70;
  }
  //Displaying stage
  display() {
    push();
    translate(this.translateX, this.translateY, this.translateZ);
    fill(this.fill);
    ellipsoid(this.radiusX, this.radiusY);
    pop();
  }
}
