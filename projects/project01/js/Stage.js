class Stage {
  constructor() {
    this.translateX = 0;
    this.translateY = 100;
    this.translateZ = -750;
    this.fill = 250;
    this.radiusX = 850;
    this.radiusY = 100;
  }
  display() {
    push();

    // Our central cube is white
    translate(this.trasnlateX, this.translateY, this.translateZ);
    fill(this.fill);

    ellipsoid(this.radiusX, this.radiusY);
    pop();
  }
}
