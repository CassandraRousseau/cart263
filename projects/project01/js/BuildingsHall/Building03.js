class Building03 extends Buildings {
  constructor(windows) {
    super(windows);
    this.translateX = -width;
    this.translateY = 0;
    this.translateZ = -600;

    this.width = 300;
    this.height = height;
    this.depth = 800;
  }
  display() {
    super.display();
    push();

    // Our central cube is white
    translate(this.translateX, this.translateY, this.translateZ);

    texture(this.texture);
    box(this.width, this.height, this.depth);
    pop();
  }
}
