class Title extends State {
  //Creating title screen parameters
  constructor(
    grassBlue,
    grassPurple,
    grassPink,
    soulBackground,
    purpleGradient
  ) {
    super(grassBlue, grassPurple, grassPink, soulBackground, purpleGradient);

    //Creating state name
    this.name = `title`;

    //Creating title
    this.titleString = "Find Your Spark!";

    //Creating instructions
    this.subheader = `Move the camera with your index, press your Mouse to Start`;

    //Creating background
    this.background = soulBackground;

    //Creating gradient (aka the sky)
    this.gradient = purpleGradient;

    //Creating the ground
    this.ground = new GroundHallOfEverything(grassBlue);

    //Creating the right side mountain
    this.mountainRight = new MountainRight(grassPurple);

    //Creating the left side mountain
    this.mountainLeft = new MountainLeft(grassPurple);

    //Creating centered mountain
    this.mountainCenter = new MountainCenter(grassPink);
  }

  //Preloading necessary images for title screen
  preload() {
    super.preload();
    this.mountainRight.preload();
    this.mountainLeft.preload();
    this.mountainCenter.preload();
    this.background.preload();
    this.ground.preload();
  }

  //Displaying the elements in draw
  draw() {
    super.draw();
    background(225, 175, 255);
    // //Displaying the background
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
    translate(0, 0, -800);
    plane(4 * width, 2 * height);
    pop();
    push();
    texture(this.gradient);
    translate(0, -height, -1000);
    rotateX(90);
    plane(4 * width, 2 * height);
    pop();

    push();
    //Displaying the ground
    this.ground.display();
    pop();
    //Displaying the right side moutain
    push();
    this.mountainRight.display();
    pop();

    //Displaying the left side mountain
    push();
    this.mountainLeft.display();
    pop();

    //Displaying the centered mountain
    push();
    this.mountainCenter.display();
    pop();

    //Display the title
    textSize(160);
    textAlign(CENTER, CENTER);
    text(this.titleString, 0, -height / 4);

    //Adding how user changes the state
    push();
    textSize(50);
    text(this.subheader, 0, -height / 50);
    pop();
  }

  //Setting mousePressed method
  mousePressed() {
    super.mousePressed();
    console.log("auditorium");

    //Setting auditorium state when mouse pressed
    if (currentState.name === `title`) {
      currentState = new Auditorium(video, curtainsData, curtains, seatsData);

      console.log(currentState);
    }
  }
}
