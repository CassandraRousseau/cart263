class CenterLeftWingHallBuilding extends HallBuilding {
  constructor() {
    super();
    this.translateX = -width / 7;
    this.translateY = 75;
    this.translateZ = -500;
    this.width = 100;
    this.height = 700;
  }
  display() {
    super.display();
    push();
    specularMaterial(this.gray, this.alpha);
    // Our central cube is white
    translate(this.translateX, this.translateY, this.translateZ);
    fill(this.fill.r, this.fill.g, this.fill.b);
    box(this.width, this.height);
    pop();
  }
}
