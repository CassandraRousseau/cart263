class MountainCenter {
  constructor(grassPink) {
    this.translateX = width / 35;
    this.translateY = 100;
    this.translateZ = -550;
    this.texture = grassPink;
    this.radiusX = 600;
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
