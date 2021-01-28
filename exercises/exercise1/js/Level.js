class Level extends State {
  //Creating level parameters
  constructor({ animalImage, sausageDogImage, numAnimals }) {
    super({ animalImage, sausageDogImage, numAnimals });
    this.gamelength = 15000;
    this.timer = setTimeout(this.time.bind(this), this.gamelength);
    this.animalImage = animalImage;
    this.sausageDogImage = sausageDogImage;
    this.numAnimals = numAnimals;
    this.animalObject = [];
    this.createAnimals();
    this.createSausageDog();
  }

  //Setting animals' random display
  createAnimals() {
    for (let i = 0; i < this.numAnimals; i++) {
      this.randomAnimals();
    }
  }

  //Setting sausage dog's display
  createSausageDog() {
    let x = random(0, width);
    let y = random(0, height);
    this.sausageDog = new SausageDog(x, y, this.sausageDogImage);
  }

  //Setting how animals are displayed randomly
  randomAnimals() {
    let x = random(0, width);
    let y = random(0, height);
    let loadedImage = random(this.animalImage);
    let animal = new Animal(x, y, loadedImage);
    this.animalObject.push(animal);
  }
  time() {
    //If the user hasn't found the sausage dog
    if (!this.sausageDog.found) {
      currentState = new GameOver(sadImage);
      this.resetLevel();
    }
    //If the user found the sausage dog
    else if (this.sausageDog.found) {
      currentState = new GameAchieved(happyImage);
      this.resetLevel();
    }
  }
  //Resets the level once it ends
  resetLevel() {
    clearTimeout(this.timer);
    this.sausageDog.found = false;
    this.sausageDog.image.width = 128;
    this.sausageDog.image.height = 128;
  }
  //Setting the level elements
  draw() {
    super.draw();
    push();
    this.updateAnimals();
    this.updateSausageDog();
    this.displayTimer();
    pop();
  }

  displayTimer() {
    //Display the timer
    push();
    textSize(110);
    textStyle(BOLD);
    textAlign(LEFT, TOP);
    fill(250);
    text(
      round(this.timer - frameCount / frameRate()),
      10,
      0,
      width / 2,
      height
    );
    pop();
  }
  //Setting animals' updated elements
  updateAnimals() {
    for (let i = 0; i < this.animalObject.length; i++) {
      this.animalObject[i].update();
    }
  }
  //Setting sausage dog's updated elements
  updateSausageDog() {
    this.sausageDog.update();
  }
  //Setting mousePressed method
  mousePressed() {
    super.mousePressed();
    this.sausageDog.mousePressed();
  }
}
