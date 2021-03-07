class PhotoStudioBackground {
  //Creating hall background parameters
  constructor(x, y, z, rotateX, rotateY, photoBackground) {
    this.x = x * width;
    this.y = y * height;
    this.z = z;
    this.rotateX = rotateX;
    this.rotateY = rotateY;
    this.w = 4 * width;
    this.h = 2 * height;
    this.background = photoBackground;
  }

  display() {
    //Displaying hall background
    push();
    texture(this.background);
    translate(this.x, this.y, this.z);
    rotateX(this.rotateX);
    rotateY(this.rotateY);
    plane(this.w, this.h);
    pop();
  }
}
