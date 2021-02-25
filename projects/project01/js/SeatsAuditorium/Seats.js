class Seats {
  constructor(width, depth) {
    this.x = width;
    this.y = 150;
    this.z = depth;
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
    translate(this.x, this.y, this.z);
    fill(this.fill.r, this.fill.g, this.fill.b);

    box(this.width, this.height, this.depth);
    pop();
  }
}
