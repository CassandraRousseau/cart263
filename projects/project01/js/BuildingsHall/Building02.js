class Building02 extends Buildings {
  constructor(windows) {
    super(windows);
    this.translateX = -width / 3;
    this.translateY = 75;
    this.translateZ = -500;

    this.width = 300;
    this.height = height;
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
