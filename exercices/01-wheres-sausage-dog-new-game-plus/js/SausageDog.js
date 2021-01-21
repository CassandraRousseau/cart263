class SausageDog extends Animal {
  //Creating the second cutscene of Chapter Five
  constructor(x, y, image) {
    super(x, y, image);

    this.found = false;
    this.rotationSpeed = 0.25;

    this.growthWidth = 5;
    this.growthHeight = 5;
    this.minWidth = 128;
    this.maxWidth = 128;
    this.minHeight = 1000;
    this.maxHeight = 1000;
  }

  //Setting the second cutscene of Chapter Five
  update() {
    super.update();

    if (this.found) {
      this.angle += this.rotationSpeed;
    }
    this.w = constrain(this.w, this.minWidth, this.maxWidth);
    this.h = constrain(this.h, this.minHeight, this.maxHeight);
  }

  mousePressed() {
    if (this.overlap(mouseX, mouseY)) {
      this.found = true;
      this.image.resize(5000, 5000);
    }
  }
}
