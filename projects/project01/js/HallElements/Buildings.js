class Buildings {
  //Creating buildings in hall parameters
  constructor(x, y, z, w, h, d, windows) {
    this.x = x * width;
    this.y = y * height;
    this.z = z;
    this.w = w * width;
    this.h = h * height;
    this.d = d;
    this.texture = windows;
  }

  //Preloading buildings in hall
  preload() {
    this.texture.preload();
  }

  //Displaying buildings in hall
  display() {
    push();
    translate(this.x, this.y, this.z);
    texture(this.texture);
    box(this.w, this.h, this.d);
    pop();
  }
}
