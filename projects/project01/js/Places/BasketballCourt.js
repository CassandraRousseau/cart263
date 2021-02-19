class BasketballCourt extends State {
  //Setting the parameters
  constructor(floor, basketball) {
    super(floor, basketball);
    this.floor = new FloorHall(floor);

    this.basketball = basketball;
  }

  //Preloading images and obj files
  preload() {
    super.preload();
    this.floor.preload();
    this.basketball.preload();
  }

  //Setting the environment
  draw() {
    super.draw();
    background(255);
    angleMode(DEGREES);

    //Displaying the floor
    push();
    this.floor.display();
    pop();

    //Displaying the basketball rim
    push();
    translate(0, -18, -1000);
    // rotateX(-180.65);
    // rotateY(0);
    // rotateZ(0);
    // scale(15, 15, 15);

    texture(this.basketball);

    sphere(100);
    pop();
  }
}
// new BasketballField(floor, basketballRim, metal);
