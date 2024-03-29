class Hole {
  //Creating hole parameters in ending
  constructor() {
    this.translateX = 0;
    this.translateY = 150;
    this.translateZ = -425;
    this.fill = 0;
    this.radiusX = 500;
    this.radiusY = 70;
  }
  //Displaying hole in ending
  display() {
    push();
    translate(this.translateX, this.translateY, this.translateZ);
    fill(this.fill);
    ellipsoid(this.radiusX, this.radiusY);
    pop();
  }
}
