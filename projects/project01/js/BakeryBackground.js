class BakeryBackground {
  constructor(bakeryShop) {
    this.translateX = 0;
    this.translateY = -115;
    this.translateZ = -600;
    this.texture = bakeryShop;
    this.width = 2000;
    this.height = height;
    this.depth = 800;
  }
  display() {
    push();
    // Our central cube is white
    translate(this.translateX, this.translateY, this.translateZ);

    texture(this.texture);
    box(this.width, this.height, this.depth);
    pop();
  }
}
