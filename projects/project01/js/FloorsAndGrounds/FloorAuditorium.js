class FloorAuditorium {
  //Creating floor in auditorium parameters
  constructor() {
    this.translateX = 0;
    this.translateY = 250;
    this.translateZ = 0;
    this.fill = 100;
    this.width = 2 * width;
    this.height = 100;
    this.depth = 1500;
  }

  // Displaying floor in auditorium
  display() {
    push();
    translate(this.translateX, this.translateY, this.translateZ);
    fill(this.fill);
    box(this.width, this.height, this.depth);
    pop();
  }
}
