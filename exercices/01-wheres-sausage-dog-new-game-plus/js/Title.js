class Title extends State {
  //Creating the title screen
  constructor() {
    super();

    this.x = 0;
    this.y = 0;
    this.width = w;
    this.height = h;
    this.titleString = "Find my Dog!";
  }

  //Setting the title screen
  draw() {
    super.draw();
    this.display();
  }

  //Displaying the title screen
  display() {
    push();
    textSize(175);
    textAlign(CENTER, CENTER);
    text(this.titleString, width / 2, height / 2);

    //Adding how user changes the state
    push();
    textSize(50);
    text("Press Enter to start", width / 2, (5 * height) / 6);
    pop();
  }

  //Setting keyPressed action after title screen
  keyPressed() {
    super.keyPressed();

    //Changes state by pressing enter key
    if (keyCode === 13) {
      currentState = new Instructions();
    }
  }
}
