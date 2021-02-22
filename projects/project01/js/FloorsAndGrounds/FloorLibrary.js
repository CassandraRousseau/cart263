class FloorLibrary {
  constructor(carpet) {
    this.translateX = 0;
    this.translateY = 570;
    this.translateZ = 0;
    this.texture = carpet;
    this.width = 3 * width;
    this.height = 175;
    this.depth = 3000;
  }
  preload() {
    this.texture.preload();
  }
  display() {
    push();
    // A red bar passing through the box
    translate(this.translateX, this.translateY, this.translateZ);

    texture(this.texture);
    box(this.width, this.height, this.depth);
    pop();
  }
}
