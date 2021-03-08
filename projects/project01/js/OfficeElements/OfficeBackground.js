class OfficeBackground {
  //Creating office background parameters
  constructor(x, z, rotateY, ovalOffice) {
    this.x = x * width;
    this.y = -height / 3;
    this.z = z;
    this.rotateY = rotateY;
    this.w = 4 * width;
    this.h = 2 * height;
    this.background = ovalOffice;
  }

  display() {
    //Displaying office background
    push();
    texture(this.background);
    translate(this.x, this.y, this.z);
    rotateY(this.rotateY);
    plane(this.w, this.h);
    pop();
  }
}
