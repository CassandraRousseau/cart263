class MainHallBuilding extends HallBuilding {
  constructor() {
    super();
    this.translateX = -width / 150;
    this.translateY = 100;
    this.translateZ = -600;
    this.width = 300;
    this.height = 900;
  }
  display() {
    super.display();
    push();
    // specularMaterial(150, 150);
    specularMaterial(this.gray, this.alpha);
    // Our central cube is white
    translate(this.translateX, this.translateY, this.translateZ);
    fill(this.fill.r, this.fill.g, this.fill.b);
    box(this.width, this.height);
    pop();
  }
}
