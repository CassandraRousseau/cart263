class HallBuilding {
  //Creating hall of everything building  parameters
  constructor(x, y, z, w) {
    this.x = x * width;
    this.y = y * height;
    this.z = z;
    this.w = w * width;
    this.h = 600;
    this.fill = {
      r: 245,
      g: 255,
      b: 175,
    };
  }
  //Displaying hall of everything building
  display() {
    directionalLight(200, 250, 100, 100, 200, -500);
    push();
    translate(this.x, this.y, this.z);
    fill(this.fill.r, this.fill.g, this.fill.b);
    box(this.w, this.h);
    pop();
  }
}
