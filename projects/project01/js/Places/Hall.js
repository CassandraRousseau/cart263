class Hall extends State {
  constructor(
    floor,
    windows,
    house,
    houseTexture,
    hotAirBalloon,
    balloonTexture
  ) {
    super(floor, windows, house, houseTexture, hotAirBalloon, balloonTexture);
    this.floor = new FloorHall(floor);
    this.house = house;
    this.houseTexture = houseTexture;
    this.hotAirBalloon = hotAirBalloon;
    this.balloonTexture = balloonTexture;
    this.buildings = [];
    //Creating the right side rock
    for (let i = 0; i < numBuildings; i++) {
      this.building01 = new Building01(windows);

      this.buildings.push(this.building01);
    }
    //Creating the right side rock
    for (let i = 0; i < numBuildings; i++) {
      this.building02 = new Building02(windows);

      this.buildings.push(this.building02);
    }
    //Creating the right side rock
    for (let i = 0; i < numBuildings; i++) {
      this.building03 = new Building03(windows);

      this.buildings.push(this.building03);
    }
    //Creating the right side rock
    for (let i = 0; i < numBuildings; i++) {
      this.building04 = new Building04(windows);

      this.buildings.push(this.building04);
    }
    //Creating the right side rock
    for (let i = 0; i < numBuildings; i++) {
      this.building05 = new Building05(windows);

      this.buildings.push(this.building05);
    }
  }
  preload() {
    super.preload();
    this.floor.preload();
    this.building01.preload();
    this.building02.preload();
    this.building03.preload();
    this.building04.preload();
    this.building05.preload();
    this.house.preload();
    this.houseTexture.preload();
    this.hotAirBalloon.preload();
    this.balloonTexture.preload();
  }
  draw() {
    super.draw();
    background(255);
    angleMode(DEGREES);
    this.floor.display();
    push();
    for (let i = 0; i < this.buildings.length; i++) {
      let buildingsObject = this.buildings[i];

      buildingsObject.display();
    }
    pop();
    push();
    translate(width / 6, height / 12, 0);
    rotateX(0);
    rotateY(-140);
    rotateZ(180);
    scale(3, 3, 3);
    texture(this.houseTexture);
    model(this.house);
    pop();
    push();
    translate(-width / 4, height / 5, 100);
    rotateX(0);
    rotateY(-140);
    rotateZ(180);
    scale(5, 5, 5);
    texture(this.balloonTexture);
    model(this.hotAirBalloon);
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
