class Level extends State {
  constructor() {
    super();

    this.animalImage = [];
    this.animalObject = [];

    this.sausageDog;
  }

  preload() {
    super.preload();
    this.animalImage.preload();
    this.sausageDog.preload();
  }

  setup() {
    createCanvas(windowWidth, windowHeight);
    createAnimals();
    createSausageDog();
  }

  createAnimals() {
    for (let i = 0; i < NUM_ANIMALS_DISPLAY; i++) {
      randomAnimals();
    }
  }

  createSausageDog() {
    let x = random(0, width);
    let y = random(0, height);
    this.sausageDog = new SausageDog(x, y, dogImage);
  }
  randomAnimals() {
    let x = random(0, width);
    let y = random(0, height);
    let loadedImage = random(this.animalImage);
    let animal = new Animal(x, y, loadedImage);
    this.animalObject.push(animal);
  }
  draw() {
    updateAnimals();
    updateSausageDog();
  }

  updateAnimals() {
    for (let i = 0; i < this.animalObject.length; i++) {
      this.animalObject[i].update();
    }
  }

  updateSausageDog() {
    sausageDog.update();
  }

  mousePressed() {
    sausageDog.mousePressed();
  }
}
