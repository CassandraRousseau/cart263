class Level extends State {
  //Creating level parameters
  constructor(animalImage, sausageDogImage, numAnimals) {
    super();
    this.name = "Level";
    this.framecountSim = frameCount;
    this.timer = new Timer();
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
  //Setting the level elements
  draw() {
    super.draw();
    push();
    this.stopTimer();
    this.updateAnimals();
    this.updateSausageDog();
    this.timer.display();
    pop();
  }
  //Setting when to stop the timer
  stopTimer() {
    let timerResult = this.timer.timeCheck(
      "Level",
      this.sausageDog,
      this.framecountSim
    );

    //Setting which state come after the level
    if (timerResult === "GameOver") {
      currentState = new GameOver(sadImage);
    } else if (timerResult === "GameAchieved") {
      currentState = new GameAchieved(happyImage);
    }
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
