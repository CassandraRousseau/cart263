class Curtains {
  constructor(x, curtains) {
    this.x = x;
    this.y = -200;
    this.z = -550;
    this.texture = curtains;
    this.width = 1000;
    this.height = height;
  }
  preload() {
    this.texture.preload();
  }
  display() {
    push();

    // Our central cube is white
    translate(this.x, this.y, this.z);

    texture(this.texture);
    plane(this.width, this.height);
    pop();
  }
}
