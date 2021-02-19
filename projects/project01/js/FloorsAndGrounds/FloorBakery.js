class FloorBakery {
  constructor(wood) {
    this.translateX = 0;
    this.translateY = 250;
    this.translateZ = 0;
    this.width = width;
    this.height = 100;
    this.depth = 600;
    this.texture = wood;
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
