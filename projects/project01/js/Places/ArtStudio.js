class ArtStudio extends State {
  constructor() {
    super();
    this.floor = new FloorHall(floor);
  }
  preload() {
    super.preload();
    this.floor.preload();
  }
  draw() {
    super.draw();
    background(255);
    push();
    this.floor.display();
    pop();
  }
}
