class Building05 extends Buildings {
  constructor(windows) {
    super(windows);
    this.translateX = (3 * width) / 5;
    this.translateY = 0;
    this.translateZ = -400;

    this.width = 500;
    this.height = 700;
    this.depth = 800;
  }
  display() {
    super.display();
    push();

    // Our central cube is white
    translate(this.translateX, this.translateY, this.translateZ);

    texture(this.texture);
    box(this.width, this.height);
    pop();
  }
}
