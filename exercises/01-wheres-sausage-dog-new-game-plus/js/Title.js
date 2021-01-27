class Title extends State {
  //Creating the title screen
  constructor() {
    super();

    this.x = 0;
    this.y = 0;
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
    textSize(125);
    textAlign(CENTER, CENTER);

    text(this.titleString, width / 2, height / 2);

    //Adding "how to change the state" text
    push();
    let size = map(mouseY, 0, height, 10, 60);
    textSize(size);
    text("Press Enter to start", width / 2, (5 * height) / 6);
    pop();
  }

  //Setting keyPressed action after title screen
  keyPressed() {
    super.keyPressed();

    //Changes state by pressing "Enter" key
    if (keyCode === 13) {
      currentState = new Instructions();
    }
  }
}
