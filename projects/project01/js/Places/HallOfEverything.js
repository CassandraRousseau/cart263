class HallOfEverything extends State {
  //Setting the parameters
  constructor(grassBlue, soulBackground, instructions, jerry) {
    super(grassBlue, soulBackground, instructions, jerry);
    this.texture = soulBackground;
    this.instructions = instructions;
    this.jerry = jerry;
    // this.subheader = `Press your Mouse to Start`;
    this.ground = new GroundHallOfEverything(grassBlue);
    this.wings = [];
    for (let i = 0; i < numBuildings; i++) {
      this.mainHallBuilding = new MainHallBuilding();

      this.wings.push(this.mainHallBuilding);
    }

    //Creating the left side thorn
    for (let i = 0; i < numBuildings; i++) {
      this.LeftWingHallBuilding = new LeftWingHallBuilding();

      this.wings.push(this.LeftWingHallBuilding);
    }
    for (let i = 0; i < numBuildings; i++) {
      this.rightWingHallBuilding = new RightWingHallBuilding();

      this.wings.push(this.rightWingHallBuilding);
    }

    //Creating the left side thorn
    for (let i = 0; i < numBuildings; i++) {
      this.centerRightWingHallBuilding = new CenterRightWingHallBuilding();

      this.wings.push(this.centerRightWingHallBuilding);
    }
    for (let i = 0; i < numBuildings; i++) {
      this.centerLeftWingHallBuilding = new CenterLeftWingHallBuilding();

      this.wings.push(this.centerLeftWingHallBuilding);
    }
  }
  preload() {
    this.texture.preload();
    this.ground.preload();
  }
  //Setting the environment
  draw() {
    super.draw();
    background(225, 175, 255);

    //Displaying the ground
    push();
    push();
    texture(this.texture);
    translate(0, 0, -800);
    plane(4 * width, 2 * height);
    pop();
    this.ground.display();

    //Displaying the building's wings
    push();
    for (let i = 0; i < this.wings.length; i++) {
      let wingsObject = this.wings[i];
      directionalLight(220, width / 2, 90, -10000);
      wingsObject.display();
    }

    pop();
    push();
    image(this.jerry, width / 12, -height / 7, 300, 300);
    pop();
    push();
    //Display the title
    textSize(30);
    textAlign(CENTER, CENTER);
    text(this.instructions, 0, -height / 3);
    pop();
    pop();
  }
}
