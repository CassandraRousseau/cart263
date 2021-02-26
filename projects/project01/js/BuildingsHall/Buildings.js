class Buildings {
  constructor(x, y, z, w, h, d, windows) {
    this.x = x * width;
    this.y = y * height;
    this.z = z * depth;
    this.w = w * width;
    this.h = h * height;
    this.d = d * depth;
    this.texture = windows;
  }
  preload() {
    this.texture.preload();
  }
  display() {
    push();

    // Our central cube is white
    translate(this.x, this.y, this.z);

    texture(this.texture);
    box(this.w, this.h, this.d);
    pop();
  }
}
