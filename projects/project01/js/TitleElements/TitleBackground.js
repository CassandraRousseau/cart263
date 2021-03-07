class TitleBackground {
  //Creating title background parameters
  constructor(x, y, z, h, rotateY, soulBackground) {
    this.x = x * width;
    this.y = y * height;
    this.z = z;
    this.rotateY = rotateY;
    this.w = 4 * width;
    this.h = h * height;
    this.background = soulBackground;
  }

  display() {
    //Displaying the background in title screen
    push();
    texture(this.background);
    translate(this.x, this.y, this.z);
    rotateY(this.rotateY);
    plane(this.w, this.h);
    pop();
  }
}
