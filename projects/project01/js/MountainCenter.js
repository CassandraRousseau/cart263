class MountainCenter {
  constructor(grassPink) {
    this.translateX = width / 300;
    this.translateY = 100;
    this.translateZ = -700;
    this.texture = grassPink;
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
