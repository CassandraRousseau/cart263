class GameAchieved extends State {
  //Creating good ending screen
  constructor() {
    super();

    this.catchTheDog = "Yay! Thank you for finding my dog!";
  }

  //Setting good ending screen
  draw() {
    super.draw();
    this.display();
  }

  //Displaying good ending screen
  display() {
    push();
    textSize(65);
    fill(255);
    textFont("Lemonada");
    textAlign(LEFT, TOP);
    text(this.catchTheDog, 20, height / 3, windowWidth, windowHeight);
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
      location.reload();
    }
  }
}
