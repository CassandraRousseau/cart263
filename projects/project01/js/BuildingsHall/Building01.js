class Building01 extends Buildings {
  constructor(windows) {
    super(windows);
    this.translateX = -width / 4;
    this.translateY = 75;
    this.translateZ = -500;

    this.width = 100;
    this.height = 700;
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
