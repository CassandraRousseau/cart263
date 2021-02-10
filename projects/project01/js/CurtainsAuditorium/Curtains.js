class Curtains {
  constructor(width, windows) {
    this.translateX = width;
    this.translateY = -200;
    this.translateZ = -550;
    this.texture = windows;
    this.width = 1000;
    this.height = height;
  }
  preload() {
    this.texture.preload();
  }
  display() {}
}
