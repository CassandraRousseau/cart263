class MountainRight {
  constructor(grassPurple) {
    this.translateX = width / 3;
    this.translateY = 75;
    this.translateZ = -700;
    this.texture = grassPurple;
    this.radiusX = 550;
    this.radiusY = 230;
  }
  preload() {
    this.texture.preload();
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
