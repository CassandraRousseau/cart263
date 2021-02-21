class Title extends State {
  //Added title screen parameters
  constructor(grassBlue, grassPurple, grassPink, soulBackground) {
    super(grassBlue, grassPurple, grassPink, soulBackground);
    this.name = `title`;
    this.titleString = "Find Your Spark!";
    this.subheader = `Press your Mouse to Start`;
    this.texture = soulBackground;
    this.ground = new GroundTitle(grassBlue);
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
    this.texture.preload();
    this.ground.preload();
  }

  //Displaying the elements in draw
  draw() {
    super.draw();
    background(225, 175, 255);
    push();
    texture(this.texture);
    translate(0, 0, -800);
    plane(4 * width, 2 * height);
    pop();
    push();

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
    pop();
  }

  //Setting mousePressed method
  mousePressed() {
    super.mousePressed();
    console.log("auditorium");
    if (currentState.name === `title`) {
      currentState = new Auditorium(video, curtains);

      console.log(currentState);
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
