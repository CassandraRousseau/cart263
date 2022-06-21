class Ending extends State {
  //Creating ending parameters
  constructor({
    soulBackground,
    purpleGradient,
    jerry,
    grassBlue,
    farewell,
    titleBackgroundData,
  }) {
    super({
      soulBackground,
      purpleGradient,
      jerry,
      grassBlue,
      farewell,
      titleBackgroundData,
    });

    //Creating gradient(aka the sky)
    this.gradient = purpleGradient;

    //Creating Jerry( character in the movie Soul)
    this.jerry = jerry;

    //Creating the ending dialog
    this.farewell = farewell;

    //Creating a hole
    this.hole = new Hole();

    //Creating the ground
    this.ground = new GroundHallOfEverything(grassBlue);

    //Creating object array
    this.titleWalls = [];

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
    for (let i = 0; i < this.titleWalls.length; i++) {
      this.titleWalls[i].display();
    }

    //Displaying the sky
    push();
    texture(this.gradient);
        translate(0, -height/1.1, -1000);
    rotateX(90);
    plane(4 * width, 2 * height);
    pop();
    //Displaying the ground
    this.ground.display();

    //Displaying the hole
    this.hole.display();

    //Displaying Jerry character
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
