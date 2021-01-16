class GameOver extends State {
  //Creating bad ending(all soccer balls are falling)screen
  constructor() {
    super();

    this.ranAway = "Oh no! My dog ran away!";
  }

  //Setting bad ending(all soccer balls are falling)screen
  draw() {
    super.draw();
    this.display();
  }

  //Displaying bad ending(all soccer balls are falling)screen
  display() {
    push();
    textSize(30);
    textAlign(LEFT, TOP);
    text(this.ranAway, width / 2, height);
    push();
    textSize(45);
    text("Press Enter to restart", width / 2, (3 * height) / 4);
    pop();
    pop();
  }

  //Setting keyPressed action after bad ending(all soccer balls are falling)screen
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new Title();
    }
  }
}
