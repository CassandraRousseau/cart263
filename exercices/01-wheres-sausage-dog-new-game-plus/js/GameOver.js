class BallsFalling extends State {
  //Creating bad ending(all soccer balls are falling)screen
  constructor() {
    super();

    this.messUp =
      "What are you doing!?!?\nYou have to kick the balls,not let them fall!";
  }

  //Setting bad ending(all soccer balls are falling)screen
  draw() {
    super.draw();
    this.display();
  }

  //Displaying bad ending(all soccer balls are falling)screen
  display() {
    push();
    textSize(65);
    fill(255);
    textFont("Lemonada");
    textAlign(LEFT, TOP);
    text(this.messUp, 20, height / 3, windowWidth, windowHeight);
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
      location.reload();
    }
  }
}
