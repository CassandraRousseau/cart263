class FloorHall {
  //Creating floor in hall parameters
  constructor(floor) {
    this.translateX = 0;
    this.translateY = 250;
    this.translateZ = 0;
    this.texture = floor;
    this.width = 2 * width;
    this.height = 100;
    this.depth = 3000;
  }

  //Preloading floor in hall
  preload() {
    this.texture.preload();
  }

  // Displaying floor in hall
  display() {
    push();
    translate(this.translateX, this.translateY, this.translateZ);
    texture(this.texture);
    box(this.width, this.height, this.depth);
    pop();
  }
}
