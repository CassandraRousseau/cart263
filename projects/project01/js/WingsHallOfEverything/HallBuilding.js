class HallBuilding {
  constructor(translateWidth, translateHeight, translateDepth, width, height) {
    this.gray = 100;
    this.alpha = 100;
    this.translateX = translateWidth;
    this.translateY = translateHeight;
    this.translateZ = translateDepth;
    this.width = width;
    this.height = 600;
    this.fill = {
      r: 245,
      g: 255,
      b: 175,
    };
  }
  display() {
    push();
    // specularMaterial(this.gray, this.alpha);
    // Our central cube is white
    translate(this.translateX, this.translateY, this.translateZ);
    fill(this.fill.r, this.fill.g, this.fill.b);
    box(this.width, this.height);
    pop();
  }
}
