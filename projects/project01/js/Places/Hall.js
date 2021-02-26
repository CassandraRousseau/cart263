class Hall extends State {
  //Setting the parameters
  constructor(
    floor,
    windows,
    house,
    houseTexture,
    hotAirBalloon,
    balloonTexture,
    buildingData
  ) {
    super(floor, windows, house, houseTexture, hotAirBalloon, balloonTexture);
    this.floor = new FloorHall(floor);
    this.house = house;
    this.houseTexture = houseTexture;
    this.hotAirBalloon = hotAirBalloon;
    this.balloonTexture = balloonTexture;
    this.buildings = [];
    for (let i = 0; i < buildingData.buildings.length; i++) {
      let data = buildingData.buildings[i];
      this.building = new Buildings(
        buildingData.x,
        buildingData.y,
        buildingData.z,
        buildingData.w,
        buildingData.h,
        buildingData.d,
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
    translate(width / 6, height / 12, 0);
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
// new Hall(
//  floor,
//  windows,
//  house,
//  houseTexture,
//  hotAirBalloon,
//  balloonTexture
// );
