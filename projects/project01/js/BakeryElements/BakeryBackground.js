class BakeryBackground {
  //Creating bakery background parameters
  constructor(x, z, w, rotateY, bakeryShop) {
    this.x = x * width;
    this.y = -height / 4;
    this.z = z;
    this.rotateY = rotateY;
    this.w = w * width;
    this.h = 2 * height;
    this.background = bakeryShop;
  }

  display() {
    //Displaying bakery background
    push();
    texture(this.background);
    translate(this.x, this.y, this.z);
    rotateY(this.rotateY);
    plane(this.w, this.h);
    pop();
  }
}
