class Title extends State {
  //Creating title screen parameters
  constructor({
    grassBlue,
    grassPurple,
    grassPink,
    soulBackground,
    purpleGradient,
    titleBackgroundData,
  }) {
    super(
      grassBlue,
      grassPurple,
      grassPink,
      soulBackground,
      purpleGradient,
      titleBackgroundData
    );

    //Creating state name
    this.name = `title`;

    //Creating object array
    this.titleWalls = [];

    //Creating title
    this.titleString = "Find Your Spark!";

    //Creating instructions
    this.subheader = `Move the camera with your index, press your Mouse to Start`;

    //Creating background
    for (let i = 0; i < titleBackgroundData.titleWalls.length; i++) {
      let backgroundTitleData = titleBackgroundData.titleWalls[i];
      this.wall = new TitleBackground(
        backgroundTitleData.x,
        backgroundTitleData.y,
        backgroundTitleData.z,
        backgroundTitleData.h,
        backgroundTitleData.rotateY,
        soulBackground
      );
      this.titleWalls.push(this.wall);
    }
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
    //Displaying the background

    //Displaying the background
    for (let i = 0; i < this.titleWalls.length; i++) {
      this.titleWalls[i].display();
    }
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
      currentState = new Auditorium({
        video: video,
        curtainsData: curtainsData,
        curtains: curtains,
        seatsData: seatsData,
      });

      console.log(currentState);
    }
  }
}
