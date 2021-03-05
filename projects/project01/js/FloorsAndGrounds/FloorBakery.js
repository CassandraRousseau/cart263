class FloorBakery {
  //Creating floor in bakery parameters
  constructor(wood) {
    this.translateX = 0;
    this.translateY = 250;
    this.translateZ = 0;
    this.width = 2 * width;
    this.height = 100;
    this.depth = 2000;
    this.texture = wood;
  }

  //Displaying floor in bakery
  display() {
    push();
    translate(this.translateX, this.translateY, this.translateZ);
    texture(this.texture);
    box(this.width, this.height, this.depth);
    pop();
  }
}
