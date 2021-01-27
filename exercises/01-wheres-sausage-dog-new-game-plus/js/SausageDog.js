class SausageDog extends Animal {
  //Creating sausage dog parameters
  constructor(x, y, image) {
    super(x, y, image);

    this.found = false;
    this.rotationSpeed = 0.25;
    this.growth = 3;
    this.size = undefined;
    this.maxWidth = 3000;
    this.maxHeight = 3000;
  }

  //Setting what happens when the sausage dog is found
  update() {
    super.update();

    //The sausage dog starts to grow if its found
    if (this.found) {
      this.image.width += this.growth;
      this.image.height += this.growth;
    }

    //The size constrain when the image reach the window width and height
    this.size = constrain(this.image.width, this.image.width, this.maxWidth);
    this.size = constrain(this.image.height, this.image.height, this.maxHeight);
    console.log(this.size);
  }

  growth() {
    //Setting when the sausage dog stops growing
    if (this.image.width === width && this.image.height === height) {
      this.growth = 0;
      this.vx = 0;
      this.vy = 0;
      console.log(this.growth);
    }
  }
  //User has to pressed his mouse to declare that the sausage dog is found
  mousePressed() {
    if (this.overlap(mouseX, mouseY)) {
      this.found = true;
    }
  }
}
