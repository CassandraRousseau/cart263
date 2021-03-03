class Fences {
  constructor(x, y, z, w, h, d, windows) {
    this.x = x * width;
    this.y = y * height;
    this.z = z;
    this.w = w * width;
    this.h = h * height;
    this.d = d;
    this.texture = fence;
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
