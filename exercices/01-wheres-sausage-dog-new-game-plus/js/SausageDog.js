class SausageDog extends Animal {
  //Creating the second cutscene of Chapter Five
  constructor(x, y, image) {
    super(x, y, image);

    this.found = false;
    this.rotationSpeed = 0.25;
    this.growth = 20;
    this.maxWidth = 500;
    this.maxHeight = 500;
  }

  //Setting the second cutscene of Chapter Five
  update() {
    super.update();

    if (this.found) {
      this.w += this.growth;
      this.h += this.growth;
      console.log(this.growth);
      console.log(this.w);
      console.log(this.h);
    }
    this.size = constrain(this.w, 128, this.maxWidth);
    this.size = constrain(this.h, 128, this.maxHeight);
  }

  mousePressed() {
    if (this.overlap(mouseX, mouseY)) {
      this.found = true;
    }
  }
}
