class Instructions extends State {
  //Creating instructions parameters
  constructor(askingImage) {
    super(askingImage);
    this.x = (3 * width) / 7;
    this.y = height / 8;
    this.askingImage = askingImage;
    //Creating the instructions' text
    this.intro =
      "Excuse me, could you help me to find my sausage dog?\n\nI think I lost it near the zoo but there's so many animals that I lost my sight on it.\n\nClick on the sausage dog and bring it back to me!\n\nMake it quick before it definitely run away!";
  }

  //Prelod the woman character image for the instructions
  preload() {
    super.preload();
    this.askingImage.preload();
  }

  //Setting instructions screen
  draw() {
    super.draw();
    this.display();
  }

  //Displaying instructions screen
  display() {
    push();
    image(askingImage, this.x, this.y);
    textSize(30);
    textAlign(LEFT, TOP);
    text(this.intro, 10, 50, width / 2, height);

    //Adding "how to change the state" text
    push();
    textSize(30);
    text("Press Enter", (6 * width) / 8, (5 * height) / 6);
    pop();
    pop();
  }

  //Setting keyPressed after instructions screen
  keyPressed() {
    super.keyPressed();

    //Changes state by pressing "Enter" key
    if (keyCode === 13) {
      currentState = new Level({
        animalImage: animalImage,
        sausageDogImage: sausageDogImage,
        numAnimals: NUM_ANIMALS_DISPLAY,
      });
    }
  }
}
