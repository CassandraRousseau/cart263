class Curtains {
  constructor(width, curtains) {
    this.translateX = width;
    this.translateY = -200;
    this.translateZ = -550;
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
    translate(this.translateX, this.translateY, this.translateZ);

    texture(this.texture);
    plane(this.width, this.height);
    pop();
  }
}
