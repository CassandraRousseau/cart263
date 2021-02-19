class CounterRight extends Counters {
  constructor(wood) {
    super(wood);
    this.translateX = width / 4;
  }
  display() {
    super.display();
    push();

    // Our central cube is white
    translate(this.translateX, this.translateY, this.translateZ);
    fill(this.fill.r, this.fill.g, this.fill.b);
    box(this.width, this.height, this.depth);
    pop();
  }
}
