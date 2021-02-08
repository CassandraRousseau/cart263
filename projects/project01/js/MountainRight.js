class MountainRight {
  constructor(grassPurple) {
    this.translateX = width / 2;
    this.translateY = 75;
    this.translateZ = -150;
    this.texture = grassPurple;
    this.radiusX = 300;
    this.radiusY = 230;
  }
  display() {
    push();
    // Our central cube is white
    translate(this.translateX, this.translateY, this.translateZ);

    push();
    texture(this.texture);
    ellipsoid(this.radiusX, this.radiusY);
    pop();
  }
}
