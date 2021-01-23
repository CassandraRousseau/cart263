class GameAchieved extends State {
  //Creating good ending screen
  constructor(happyImage) {
    super(happyImage);
    this.x = (3 * width) / 7;
    this.y = height / 8;
    this.Image = happyImage;
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
    image(happyImage, this.x, this.y);
    textSize(75);
    textAlign(LEFT, TOP);
    text(this.catchTheDog, 10, 50);
    push();
    textSize(30);
    text("Press Enter to restart", 10, (3 * height) / 4);
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
