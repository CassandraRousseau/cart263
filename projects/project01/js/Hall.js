class Hall extends State {
  constructor() {
    super();
    this.floor = new FloorHall(floor);
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
    this.floor.preload();
    this.building01.preload();
    this.building02.preload();
    this.building03.preload();
    this.building04.preload();
    this.building05.preload();
  }
  draw() {
    super.draw();
    background(255);
    this.floor.display();
    push();
    for (let i = 0; i < this.buildings.length; i++) {
      let buildingsObject = this.buildings[i];

      buildingsObject.display();
    }
    pop();
  }
}
