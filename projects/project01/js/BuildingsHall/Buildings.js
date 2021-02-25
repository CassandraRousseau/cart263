class Buildings {
  constructor(x, y, z, w, h, d, windows) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    this.h = h;
    this.d = d;
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
