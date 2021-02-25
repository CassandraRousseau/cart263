class Counters {
  constructor(translateWidth) {
    this.translateX = translateWidth;
    this.translateY = 150;
    this.translateZ = 200;

    this.width = 250;
    this.height = 100;
    this.depth = 400;
    this.fill = {
      r: 255,
      g: 255,
      b: 150,
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
