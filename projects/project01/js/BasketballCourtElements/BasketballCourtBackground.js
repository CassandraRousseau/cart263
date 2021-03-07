class BasketballCourtBackground {
  //Creating basketball court background parameters
  constructor(x, z, rotateY, fence) {
    this.x = x * width;
    this.y = -height / 3;
    this.z = z;
    this.rotateY = rotateY;
    this.w = 4 * width;
    this.h = 2 * height;
    this.fence = fence;
  }

  display() {
    //Displaying basketball court background
    push();
    texture(this.fence);
    translate(this.x, this.y, this.z);
    rotateX(this.rotateX);
    rotateY(this.rotateY);
    plane(this.w, this.h);
    pop();
  }
}
