class Buildings {
  constructor(
    windows,
    translateWidth,
    translateHeight,
    translateDepth,
    width,
    height,
    depth
  ) {
    this.translateX = translateWidth;
    this.translateY = translateHeight;
    this.translateZ = translateDepth;
    this.texture = windows;
    this.width = width;
    this.height = height;
    this.depth = depth;
  }
  preload() {
    this.texture.preload();
  }
  display() {}
}
