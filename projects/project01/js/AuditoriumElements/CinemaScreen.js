class CinemaScreen {
  //Creating cinema screen parameters in auditorium
  constructor() {
    this.translateX = 0;
    this.translateY = -175;
    this.translateZ = -400;
    this.width = 700;
    this.height = 400;
    this.fill = 0;
  }

  //Displaying cinema screen in auditorium
  display() {
    push();
    translate(this.translateX, this.translateY, this.translateZ);
    fill(this.fill);
    plane(this.width, this.height);
    pop();
  }
}
