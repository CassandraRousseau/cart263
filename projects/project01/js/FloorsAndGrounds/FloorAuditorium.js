class FloorAuditorium {
  constructor() {
    this.translateX = 0;
    this.translateY = 250;
    this.translateZ = 0;
    this.fill = 100;
    this.width = 2 * width;
    this.height = 100;
    this.depth = 1500;
  }
  display() {
    push();
    // A red bar passing through the box
    translate(this.translateX, this.translateY, this.translateZ);
    fill(this.fill);
    box(this.width, this.height, this.depth);
    pop();
  }
}
