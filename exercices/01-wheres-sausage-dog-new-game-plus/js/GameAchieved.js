class GameAchieved extends State {
  //Creating good ending screen
  constructor() {
    super();

    this.catchTheDog = "Yay! Thank you for finding my dog!";
  }

  //Setting good ending screen
  draw() {
    super.draw();
    push();
    this.display();
    pop();
  }

  //Displaying good ending screen
  display() {
    push();
    textSize(30);
    textAlign(LEFT, TOP);
    text(this.catchTheDog, width / 2, height);
    push();
    textSize(45);
    text("Press Enter to restart", width / 2, (3 * height) / 4);
    pop();
    pop();
  }

  //Setting keyPressed after good ending screen
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new Title();
    }
  }
}
