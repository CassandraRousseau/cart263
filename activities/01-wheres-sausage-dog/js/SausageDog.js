class SausageDog extends Animal {
  //Creating the second cutscene of Chapter Five
  constructor(x, y, image) {
    super(x, y, image);

    this.found = false;
    this.rotationSpeed = 0.25;
  }

  //Setting the second cutscene of Chapter Five
  update() {
    super.update();

    if (this.found) {
      this.angle += this.rotationSpeed;
    }
  }

  mousePressed() {
    if (this.overlap(mouseX, mouseY)) {
      this.found = true;
    }
  }
}
