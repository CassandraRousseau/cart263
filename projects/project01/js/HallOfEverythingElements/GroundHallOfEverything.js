class GroundHallOfEverything {
  //Creating ground in hall of everything parameters
  constructor(grassBlue) {
    this.translateX = 0;
    this.translateY = 250;
    this.translateZ = 0;
    this.texture = grassBlue;
    this.x = 3 * width;
    this.y = 175;
    this.z = 2000;
  }

  //Preloading ground texture
  preload() {
    this.texture.preload();
  }

  // Displaying ground in  hall of everything
  display() {
    push();
    translate(this.translateX, this.translateY, this.translateZ);
    texture(this.texture);
    box(this.x, this.y, this.z);
    pop();
  }
}
