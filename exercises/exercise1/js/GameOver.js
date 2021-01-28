class GameOver extends State {
  //Creating game over parameters
  constructor(sadImage) {
    super(sadImage);
    this.x = (3 * width) / 7;
    this.y = height / 8;
    this.Image = sadImage;
    this.ranAway = "Oh no! My dog ran away!";
  }

  //Prelod the woman character image for Game Over
  preload() {
    super.preload();
    this.sadImage.preload();
  }

  //Setting game over screen
  draw() {
    super.draw();
    push();
    this.display();
    pop();
  }

  //Displaying game over screen
  display() {
    push();
    image(sadImage, this.x, this.y);
    textSize(75);
    textAlign(LEFT, TOP);
    text(this.ranAway, 10, 50);

    //Adding "how to change the state" text
    push();
    textSize(30);
    text("Press Enter to restart", 10, (3 * height) / 4);
    pop();
    pop();
  }

  //The game restart after "Enter" key is pressed
  keyPressed() {
    super.keyPressed();

    if (keyCode === 13) {
      currentState = new Title();
    }
  }
}
