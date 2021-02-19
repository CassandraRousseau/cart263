class HallOfEverything extends State {
  //Setting the parameters
  constructor(grassBlue, soulBackground) {
    super(grassBlue, soulBackground);
    this.texture = soulBackground;
    this.ground = new GroundHallOfEverything(grassBlue);
    this.wings = [];
    for (let i = 0; i < numCurtainRight; i++) {
      this.mainHallBuilding = new MainHallBuilding();

      this.wings.push(this.mainHallBuilding);
    }

    //Creating the left side thorn
    for (let i = 0; i < numCurtainLeft; i++) {
      this.LeftWingHallBuilding = new LeftWingHallBuilding();

      this.wings.push(this.LeftWingHallBuilding);
    }
    for (let i = 0; i < numCurtainRight; i++) {
      this.rightWingHallBuilding = new RightWingHallBuilding();

      this.wings.push(this.rightWingHallBuilding);
    }

    //Creating the left side thorn
    for (let i = 0; i < numCurtainLeft; i++) {
      this.centerRightWingHallBuilding = new CenterRightWingHallBuilding();

      this.wings.push(this.centerRightWingHallBuilding);
    }
    for (let i = 0; i < numCurtainRight; i++) {
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
    // image(this.image, 0, 0, 1000, 1000);
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
    pop();
  }
}
