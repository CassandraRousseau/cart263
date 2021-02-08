class Seats {
  constructor(width, height, depth) {
    this.translateX = width;
    this.translateY = height;
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
    translate(width, height, depth);
    fill(this.fill.r, this.fill.g, this.fill.b);

    box(this.width, this.height, this.depth);
    pop();
  }
}
-width / 4, 100, 100;
width / 4, 100, 100 - width / 4, 100, 200;
width / 4, 100, 200 - width / 4, 100, 300;
width / 4, 100, 300;
