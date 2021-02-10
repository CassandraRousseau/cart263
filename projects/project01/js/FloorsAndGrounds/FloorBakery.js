class FloorBakery {
  constructor() {
    this.translateX = 0;
    this.translateY = 250;
    this.translateZ = 0;
    this.width = width;
    this.height = 100;
    this.depth = 600;
    this.fill = {
      r: 100,
      g: 185,
      b: 225,
    };
  }
  display() {
    push();
    // A red bar passing through the box
    translate(this.translateX, this.translateY, this.translateZ);
    fill(this.fill.r, this.fill.g, this.fill.b);
    box(this.width, this.height, this.depth);
    pop();
  }
}
