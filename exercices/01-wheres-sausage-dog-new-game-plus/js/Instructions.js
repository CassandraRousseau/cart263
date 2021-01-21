class Instructions extends State {
  //Creating instructions screen for the first level
  constructor() {
    super();

    //Creating the text of instructions 1
    this.intro =
      "Excuse me, could you help me to find my sausage dog?.\n\nI think I lost it in the dog park but there's so many of them that I lost my sight on it.\n\nClick on the sausage dog to bring it back to me!\n\nMake it quick before it definitely run away!";
  }

  //Setting instructions screen for the first level
  draw() {
    super.draw();
    this.display();
  }

  //Displaying instructions screen for the first level
  display() {
    push();
    textSize(30);
    textAlign(LEFT, TOP);
    text(this.intro, 10, 50, width / 2, height);
    pop();
  }

  //Setting keyPressed after instructions screen for the first level
  keyPressed() {
    super.keyPressed();

    //Changes state by pressing enter key
    if (keyCode === 13) {
      currentState = new Level(
        animalImage,
        sausageDogImage,
        NUM_ANIMALS_DISPLAY
      );
    }
  }
}
