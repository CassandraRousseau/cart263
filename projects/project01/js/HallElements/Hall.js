class Hall extends State {
  //Setting Hall parameters
  constructor({
    floor,
    windows,
    house,
    houseTexture,
    hotAirBalloon,
    balloonTexture,
    buildingData,
    gradient,
    hallBackgroundData,
  }) {
    super({
      floor,
      windows,
      house,
      houseTexture,
      hotAirBalloon,
      balloonTexture,
      buildingData,
      gradient,
      hallBackgroundData,
    });

    //Creating floor
    this.floor = new FloorHall(floor);

    //Creating house
    this.house = house;

    //Creating hot air balloon
    this.hotAirBalloon = hotAirBalloon;

    //Creating house texture
    this.houseTexture = houseTexture;

    //Creating hot air balloon texture
    this.balloonTexture = balloonTexture;

    //Creating objects arrays
    this.buildings = [];
    this.hallWalls = [];

    //Creating background
    for (let i = 0; i < hallBackgroundData.hallWalls.length; i++) {
      let backgroundHallData = hallBackgroundData.hallWalls[i];
      this.wall = new HallBackground(
        backgroundHallData.x,
        backgroundHallData.y,
        backgroundHallData.z,
        backgroundHallData.rotateX,
        backgroundHallData.rotateY,
        gradient
      );
      this.hallWalls.push(this.wall);
    }
    //Creating buildings
    for (let i = 0; i < buildingData.buildings.length; i++) {
      let data = buildingData.buildings[i];
      this.building = new Buildings(
        data.x,
        data.y,
        data.z,
        data.w,
        data.h,
        data.d,
        windows
      );
      this.buildings.push(this.building);
    }
  }
  //Preloading images and obj files
  preload() {
    super.preload();
    this.floor.preload();
    this.windows.preload();
    this.house.preload();
    this.houseTexture.preload();
    this.hotAirBalloon.preload();
    this.balloonTexture.preload();
  }

  //Setting the environment
  draw() {
    super.draw();
    background(255);
    angleMode(DEGREES);
    push();
    //Displaying the background
    for (let i = 0; i < this.hallWalls.length; i++) {
      this.hallWalls[i].display();
    }

    //Displaying the floor
    push();
    this.floor.display();

    //Displaying the buildings
    push();
    for (let i = 0; i < this.buildings.length; i++) {
      this.buildings[i].display();
    }
    pop();

    //Displaying the house
    push();
    translate(width / 8, height / 12, -100);
    rotateX(0);
    rotateY(-140);
    rotateZ(180);
    scale(3, 3, 3);
    texture(this.houseTexture);
    model(this.house);
    pop();

    //Displaying the hot air balloon
    push();
    translate(-width / 4, height / 5, 100);
    rotateX(0);
    rotateY(-140);
    rotateZ(180);
    scale(5, 5, 5);
    texture(this.balloonTexture);
    model(this.hotAirBalloon);
    pop();
    pop();
  }
}
