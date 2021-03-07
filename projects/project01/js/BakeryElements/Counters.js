class Counters {
  //Creating counters
  constructor(x, wood) {
    this.x = x * width;
    this.y = 150;
    this.z = 200;
    this.width = 250;
    this.height = 100;
    this.depth = 400;
    this.texture = wood;
  }

  //Displaying counters
  display() {
    push();
    translate(this.x, this.y, this.z);
    texture(this.texture);
    box(this.width, this.height, this.depth);
    pop();
  }
}
