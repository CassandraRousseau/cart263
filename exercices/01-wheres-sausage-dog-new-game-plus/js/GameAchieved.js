class GameAchieved extends State {
  //Creating game achieved parameters
  constructor(happyImage) {
    super(happyImage);
    this.x = (3 * width) / 7;
    this.y = height / 8;
    this.Image = happyImage;
    this.catchTheDog = "Yay! Thank you for finding my dog!";
  }

  //Setting game achieved screen
  draw() {
    super.draw();
    push();
    this.display();
    pop();
  }

  //Displaying game achieved screen
  display() {
    push();
    image(happyImage, this.x, this.y);
    textSize(75);
    textAlign(LEFT, TOP);
    text(this.catchTheDog, 10, 50);

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
