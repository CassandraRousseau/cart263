class GroundTitle {
  constructor(grassBlue) {
    this.translateX = 0;
    this.translateY = 250;
    this.translateZ = 0;
    this.texture = grassBlue;
    this.x = width;
    this.y = 175;
    this.z = 800;
  }
  preload() {
    this.texture.preload();
  }
  display() {
    // A red bar passing through the box
    translate(this.translateX, this.translateY, this.translateZ);
    texture(this.texture);
    box(this.x, this.y, this.z);
    pop();
  }
}
