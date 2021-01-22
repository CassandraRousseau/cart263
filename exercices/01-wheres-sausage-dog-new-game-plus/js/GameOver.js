class GameOver extends State {
  //Creating bad ending(all soccer balls are falling)screen
  constructor() {
    super();
    this.ranAway = "Oh no! My dog ran away!";
  }

  //Setting bad ending(all soccer balls are falling)screen
  draw() {
    super.draw();
    push();
    this.display();
    pop();
  }

  //Displaying bad ending(all soccer balls are falling)screen
  display() {
    push();
    textSize(50);
    textAlign(LEFT, TOP);
    text(this.ranAway, 10, 50);
    push();
    textSize(20);
    text("Press Enter to restart", 10, (3 * height) / 4);
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
