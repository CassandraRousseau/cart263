class Hall extends State {
  //Setting Hall parameters
  constructor(
    floor,
    windows,
    house,
    houseTexture,
    hotAirBalloon,
    balloonTexture,
    buildingData,
    gradient
  ) {
    super(
      floor,
      windows,
      house,
      houseTexture,
      hotAirBalloon,
      balloonTexture,
      buildingData,
      gradient
    );
    this.floor = new FloorHall(floor);
    this.house = house;
    this.gradient = gradient;
    this.houseTexture = houseTexture;
    this.hotAirBalloon = hotAirBalloon;
    this.balloonTexture = balloonTexture;
    this.buildings = [];
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

    //Dispalying the background
    texture(this.gradient);
    translate(2 * width, -height / 3, -2000);
    rotateY(-90);
    plane(4 * width, 2 * height);
    pop();
    push();

    texture(this.gradient);
    translate(-2 * width, -height / 3, -2000);
    rotateY(90);
    plane(4 * width, 2 * height);
    pop();
    push();

    texture(this.gradient);
    translate(-100, -height / 3.5, -2500);
    plane(4 * width, 2 * height);
    pop();
    push();

    texture(this.gradient);
    translate(0, -height, -1000);
    rotateX(90);
    plane(4 * width, 2 * height);
    pop();
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
