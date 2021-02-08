class Title extends State {
  constructor() {
    super.constructor();
    this.name = `title`;
    this.ground = new GroundTitle();
    this.user = new User();
    this.mountainRight = new MountainRight();
    this.mountainLeft = new MountainLeft();
    this.mountainCenter = new MountainCenter();
  }
  draw() {
    background(225, 175, 255);

    // Translate to the center (not really needed, but just for completeness)

    // Looks nicer

    pop();
  }
  mousePressed() {
    if (currentState === `title`) {
      currentState = new Auditorium();
    }
  }
}
