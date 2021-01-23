class Level extends State {
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

  createAnimals() {
    for (let i = 0; i < this.numAnimals; i++) {
      this.randomAnimals();
    }
  }

  createSausageDog() {
    let x = random(0, width);
    let y = random(0, height);
    this.sausageDog = new SausageDog(x, y, this.sausageDogImage);
  }

  randomAnimals() {
    let x = random(0, width);
    let y = random(0, height);
    let loadedImage = random(this.animalImage);
    let animal = new Animal(x, y, loadedImage);
    this.animalObject.push(animal);
  }
  draw() {
    super.draw();
    push();
    this.stopTimer();
    this.updateAnimals();
    this.updateSausageDog();
    this.timer.display();
    pop();
  }
  stopTimer() {
    let timerResult = this.timer.timeCheck(
      "Level",
      this.sausageDog,
      this.framecountSim
    );

    //Setting which states come after the level
    //**Assistance from the instructor Pippin to know how to call at a specific state the common good ending for each level
    if (timerResult === "GameOver") {
      currentState = new GameOver(sadImage);
    } else if (timerResult === "GameAchieved") {
      currentState = new GameAchieved(happyImage);
    }
  }
  updateAnimals() {
    for (let i = 0; i < this.animalObject.length; i++) {
      this.animalObject[i].update();
    }
  }

  updateSausageDog() {
    this.sausageDog.update();
  }
  mousePressed() {
    this.sausageDog.mousePressed();
  }
}
