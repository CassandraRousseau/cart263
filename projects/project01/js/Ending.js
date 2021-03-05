class Ending extends State {
  //Creating ending parameters
  constructor(soulBackground, purpleGradient, jerry, grassBlue, farewell) {
    super(soulBackground, purpleGradient, jerry, grassBlue, farewell);
    this.background = soulBackground;
    this.gradient = purpleGradient;
    this.jerry = jerry;
    this.farewell = farewell;
    this.hole = new Hole();
    this.ground = new GroundHallOfEverything(grassBlue);
  }
  //Preloading textures and images
  preload() {
    super.preload();
    this.gradient.preload();
    this.background.preload();
    this.jerry.prelod();
    this.ground.preload();
  }
  //Displaying the ending
  draw() {
    super.draw();
    background(225, 175, 255);
    //Displaying the background
    push();
    texture(this.background);
    translate(3 * width, -height / 1.4, -1000);
    rotateY(-90);
    plane(4 * width, 2.6 * height);
    pop();
    push();
    texture(this.background);
    translate(-3 * width, -height / 1.4, -1000);
    rotateY(90);
    plane(4 * width, 2.6 * height);
    pop();
    push();
    texture(this.background);
    translate(0, -height / 1.5, -800);
    plane(4 * width, 2 * height);
    pop();

    //Displaying the sky
    push();
    texture(this.gradient);
    translate(0, -height, -1000);
    rotateX(90);
    plane(4 * width, 2 * height);
    pop();
    //Displaying the ground
    this.ground.display();

    //Displaying the hole
    this.hole.display();

    //Displaying the jerry character
    push();
    translate(0, 0, 300);
    image(this.jerry, width / 12, -height / 7, 300, 300);
    pop();
    push();
    //Display the instructions
    textSize(30);
    textAlign(CENTER, CENTER);
    translate(0, 0, 200);
    text(this.farewell, 0, -height / 3);
    pop();
    push();
    //Display the instructions
    textSize(30);
    textAlign(CENTER, CENTER);
    translate(0, height / 4, 200);
    text(`The End`, 0, -height / 3);
    pop();
  }
}
