class Instructions1 extends State {
  //Creating instructions screen for the first level
  constructor() {
    super();

    //Creating the text of instructions 1
    this.intro =
      "Find and catch the magic petal through the wind.\n\nClick with your mouse to catch the petal.\n\nCollect the magic petal before it's too late!";
  }

  //Setting instructions screen for the first level
  draw() {
    super.draw();
    this.display();
  }

  //Displaying instructions screen for the first level
  display() {
    push();
    background(255);
    textSize(60);
    textAlign(LEFT, TOP);
    text(this.intro, 10, 50, windowWidth, windowHeight);
    pop();
  }

  //Setting keyPressed after instructions screen for the first level
  keyPressed() {
    super.keyPressed();

    //Changes state by pressing enter key
    if (keyCode === 13) {
      currentState = new Level1();
    }
  }
}
