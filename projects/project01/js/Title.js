class Title extends State {
  constructor() {
    super();
    this.name = `title`;
    this.titleString = "Find Your Spark!";
    this.subheader = `Press your Mouse to Start`;

    this.ground = new GroundTitle(grassBlue);
    // this.user = new User();
    this.mountainRight = new MountainRight(grassPurple);
    this.mountainLeft = new MountainLeft(grassPurple);
    this.mountainCenter = new MountainCenter(grassPink);
  }
  //Preloading necessary images for title screen
  preload() {
    super.preload();
    this.mountainRight.preload();
    this.mountainLeft.preload();
    this.mountainCenter.preload();
    this.ground.preload();
  }

  draw() {
    super.draw();
    background(225, 175, 255);
    push();

    this.ground.display();
    push();
    this.mountainRight.display();
    pop();
    push();
    this.mountainLeft.display();
    pop();
    push();
    this.mountainCenter.display();
    pop();
    textSize(175);
    textAlign(CENTER, CENTER);
    text(this.titleString, width / 2, height / 2);

    //Adding how user changes the state
    push();
    textSize(50);
    text(this.subheader, width / 2, (5 * height) / 6);
    pop();
    pop();
  }
  mousePressed() {
    super.mousePressed();
    console.log(`Auditorium`);
    if (currentState === `title`) {
      currentState = new Auditorium();
    }
  }
}
