class Level extends State {
  //Creating level parameters
  constructor(animalImage, sausageDogImage, numAnimals) {
    super();
    this.gamelength = 30000;
    setTimeout(time, this.gamelength);
    console.log(time);
    this.framecountSim = frameCount;
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
    }
    //If the user found the sausage dog
    else if (this.sausageDog.found) {
      currentState = new GameAchieved(happyImage);
    }
  }
  //Setting the level elements
  draw() {
    super.draw();
    push();
    this.displayTimer();
    this.updateAnimals();
    this.updateSausageDog();
    this.timer.display();
    pop();
  }

  displayTimer() {
    //Display the timer
    push();
    textSize(110);
    textStyle(BOLD);
    textAlign(LEFT, TOP);
    fill(250);
    text(this.gamelength, 10, 0, width / 2, height);
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
    this.sausageDog.mousePressed();
  }
}
