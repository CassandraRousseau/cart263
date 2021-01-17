class Level extends State {
  constructor() {
    super();

    this.animalImage = [];
    this.animalObject = [];

    this.sausageDog;

    for (let i = 0; i < NUM_ANIMALS_DISPLAY; i++) {
      let x = random(0, width);
      let y = random(0, height);
      let loadedImage = random(this.animalImage);
      let animal = new Animal(x, y, loadedImage);
      this.animalObject.push(animal);
    }

    let x = random(0, width);
    let y = random(0, height);
    this.sausageDog = new SausageDog(x, y, dogImage);
  }

  preload() {
    super.preload();
    this.animalImage.preload();
    this.sausageDog.preload();
  }

  draw() {
    for (let i = 0; i < this.animalObject.length; i++) {
      this.animalObject[i].move();
      this.animalObject[i].overlap();
      this.animalObject[i].update();
    }

    this.sausageDog.update();
  }

  mousePressed() {
    this.sausageDog.mousePressed();
  }
}
