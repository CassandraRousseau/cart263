class Curtains {
  //Creating curtains parameters in auditorium
  constructor(x, curtains) {
    this.x = x * width;
    this.y = -200;
    this.z = -550;
    this.texture = curtains;
    this.width = 1000;
    this.height = height;
  }

  //Preloading curtains in auditorium
  preload() {
    this.texture.preload();
  }

  //Displaying curtains in auditorium
  display() {
    push();
    translate(this.x, this.y, this.z);
    texture(this.texture);
    plane(this.width, this.height);
    pop();
  }
}
