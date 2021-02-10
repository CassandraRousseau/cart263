class HallBuilding {
  constructor(translateWidth, translateHeight, translateDepth, width, height) {
    this.gray = 100;
    this.alpha = 100;
    this.translateX = translateWidth;
    this.translateY = translateHeight;
    this.translateZ = translateDepth;
    this.width = width;
    this.height = height;
    this.fill = {
      r: 245,
      g: 255,
      b: 175,
    };
  }
  display() {}
}
