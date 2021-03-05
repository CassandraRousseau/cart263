class Curtains {
  //Creating curtains parameters
  constructor(x, curtains) {
    this.x = x * width;
    this.y = -200;
    this.z = -550;
    this.texture = curtains;
    this.width = 1000;
    this.height = height;
  }

  //Preloading curtains
  preload() {
    this.texture.preload();
  }

  //Displaying curtains
  display() {
    push();
    translate(this.x, this.y, this.z);
    texture(this.texture);
    plane(this.width, this.height);
    pop();
  }
}
