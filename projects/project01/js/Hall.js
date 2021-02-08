class Hall extends State {
  constructor() {
    super();
    this.floor = new FloorHall(floor);
  }
  preload() {
    this.floor.preload();
  }
  draw() {
    super.draw();
    background(255);
  }
}
