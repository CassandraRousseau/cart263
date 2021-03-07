class MountainCenter {
  //Creating centered mountain parameters in title screen
  constructor(grassPink) {
    this.translateX = width / 300;
    this.translateY = 100;
    this.translateZ = -700;
    this.texture = grassPink;
    this.radiusX = 550;
    this.radiusY = 230;
  }

  //Preloading centered mountain
  preload() {
    this.texture.preload();
  }

  //Displaying centered mountain in the title screen
  display() {
    push();
    translate(this.translateX, this.translateY, this.translateZ);
    push();
    texture(this.texture);
    ellipsoid(this.radiusX, this.radiusY);
    pop();
  }
}
