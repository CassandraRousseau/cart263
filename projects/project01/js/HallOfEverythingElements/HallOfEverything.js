class HallOfEverything extends State {
  //Setting hall of everything parameters
  constructor({
    grassBlue,
    soulBackground,
    instructions,
    jerry,
    wingsData,
    purpleGradient,
    titleBackgroundData,
  }) {
    super({
      grassBlue,
      soulBackground,
      instructions,
      jerry,
      wingsData,
      purpleGradient,
      titleBackgroundData,
    });

    //Creating background
    this.texture = soulBackground;

    //Creating instructions
    this.instructions = instructions;

    //Creating jerry(character in Soul)
    this.jerry = jerry;

    //Creating gradient(aka the sky)
    this.gradient = purpleGradient;

    //Creating the ground
    this.ground = new GroundHallOfEverything(grassBlue);

    //Creating objects arrays
    this.titleWalls = [];
    this.wings = [];

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

    //Creating wings of hall of everything building
    for (let i = 0; i < wingsData.wings.length; i++) {
      let data = wingsData.wings[i];
      this.wing = new HallBuilding(data.x, data.y, data.z, data.w);
      this.wings.push(this.wing);
    }
  }

  //Preloading obj file and texture
  preload() {
    this.texture.preload();
    this.ground.preload();
  }
  //Setting the environment
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
    translate(0, -height, -1000);
    rotateX(90);
    plane(4 * width, 2 * height);
    pop();

    //Displaying the ground
    this.ground.display();

    //Displaying the building's wings
    push();
    for (let i = 0; i < this.wings.length; i++) {
      this.wings[i].display();
    }
    pop();

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
    text(this.instructions, 0, -height / 2.75);
    pop();
  }
}
