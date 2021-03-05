class FloorStudio {
  //Creating art studio parameters
  constructor(tissue) {
    this.translateX = 0;
    this.translateY = 250;
    this.translateZ = 0;
    this.texture = tissue;
    this.width = 2 * width;
    this.height = 100;
    this.depth = 3000;
  }

  //Preloading floor in art studio
  preload() {
    this.texture.preload();
  }

  // Displaying floor in art studio
  display() {
    push();
    translate(this.translateX, this.translateY, this.translateZ);
    texture(this.texture);
    box(this.width, this.height, this.depth);
    pop();
  }
}
