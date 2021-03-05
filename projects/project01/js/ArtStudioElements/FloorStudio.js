class FloorStudio {
  //Creating floor studio parameters
  constructor(tissue) {
    this.translateX = 0;
    this.translateY = 250;
    this.translateZ = 0;
    this.texture = tissue;
    this.width = 2 * width;
    this.height = 500;
    this.depth = 3000;
  }

  //Preloading floor texture
  preload() {
    this.texture.preload();
  }

  //Displaying floor studio
  display() {
    push();
    translate(this.translateX, this.translateY, this.translateZ);
    texture(this.texture);
    box(this.width, this.height, this.depth);
    pop();
  }
}
