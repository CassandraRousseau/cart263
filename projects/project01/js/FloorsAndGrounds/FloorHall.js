class FloorHall {
  constructor(floor) {
    this.translateX = 0;
    this.translateY = 250;
    this.translateZ = 0;
    this.texture = floor;
    this.width = width;
    this.height = 100;
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
