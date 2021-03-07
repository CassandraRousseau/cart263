class MountainLeft {
  //Creating left side mountain parameters in title screen
  constructor(grassPurple) {
    (this.translateX = -width / 3),
      (this.translateY = 75),
      (this.translateZ = -700),
      (this.texture = grassPurple),
      (this.radiusX = 550);
    this.radiusY = 230;
  }

  //Preloading left side mountain
  preload() {
    this.texture.preload();
  }

  //Displaying left side mountain the title screen
  display() {
    push();
    translate(this.translateX, this.translateY, this.translateZ);
    texture(this.texture);
    ellipsoid(this.radiusX, this.radiusY);
    pop();
  }
}
