class SeatsOffice {
  //Creating seats parameters in office
  constructor(x, rotateX, doughnut8, cushion) {
    this.x = x * width;
    this.y = height / 8;
    this.z = 400;
    this.rotateX = rotateX;
    this.scale = 10;
    this.cushion = cushion;
    this.doughnut8 = doughnut8;
  }
  //Displaying seats in office
  display() {
    push();
    translate(this.x, this.y, this.z);
    rotateX(this.rotateX);
    scale(this.scale);
    texture(this.cushion);
    model(this.doughnut8);
    pop();
  }
}
