class Title extends State {
  //Added title screen parameters
  constructor(grassBlue, grassPurple, grassPink) {
    super(grassBlue, grassPurple, grassPink);
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

  //Displaying the elements in draw
  draw() {
    super.draw();
    background(225, 175, 255);
    push();

    //Displaying the ground
    this.ground.display();

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

  //Setting mousePressed method
  mousePressed() {
    super.mousePressed();
    console.log(`Auditorium`);
    if (currentState === `title`) {
      currentState = new Auditorium();
    }
  }
}
//   chosenLocation() {
//     super.chosenLocation();
//   }
//   chosenCareer() {
//     super.chosenCareer();
//   }
// }
//   running() {
//     super.running();
//   }
//   cameraCursor() {
//     super.cameraCursor();
//   }
//
//   highlightHand(hand) {
//     super.hightlight();
//   }
// }
