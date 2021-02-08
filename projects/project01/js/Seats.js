class Seats {
  constructor(width, depth) {
    this.translateX = width;
    this.translateY = 100;
    this.translateZ = depth;
    this.width = 300;
    this.height = 75;
    this.depth = 50;
    this.fill = {
      r: 160,
      g: 50,
      b: 75,
    };
  }

  display() {
    push();

    // Our central cube is white
    translate(this.translateX, this.translateY, this.translateZ);
    fill(this.fill.r, this.fill.g, this.fill.b);

    box(this.width, this.height, this.depth);
    pop();
  }
}
