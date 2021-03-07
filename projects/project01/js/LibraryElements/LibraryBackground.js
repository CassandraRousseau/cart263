class LibraryBackground {
  //Creating library background parameters
  constructor(x, y, z, rotateY, libraryBackground) {
    this.x = x * width;
    this.y = y * height;
    this.z = z;
    this.rotateY = rotateY;
    this.w = 4 * width;
    this.h = 2 * height;
    this.background = libraryBackground;
  }

  display() {
    //Displaying library background
    push();
    texture(this.background);
    translate(this.x, this.y, this.z);
    rotateY(this.rotateY);
    plane(this.w, this.h);
    pop();
  }
}
