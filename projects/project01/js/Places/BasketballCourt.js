class BasketballCourt extends State {
  //Setting the parameters
  constructor(floor, basketball, fence, sky) {
    super(floor, basketball, fence, sky);
    this.floor = new FloorHall(floor);
    this.fence = fence;
    this.sky = sky;
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

    push();

    texture(this.fence);
    translate(1.5 * width, -height / 3, -1000);
    rotateY(-90);
    plane(4 * width, 2 * height);
    pop();
    push();

    texture(this.fence);
    translate(-1.5 * width, -height / 3, -1000);
    rotateY(90);
    plane(4 * width, 2 * height);
    pop();
    push();

    texture(this.fence);
    translate(0, -height / 3, -2500);
    plane(4 * width, 2 * height);
    pop();

    push();

    texture(this.sky);
    translate(0, -height, -1000);
    rotateX(90);
    plane(4 * width, 2 * height);
    pop();
    //Displaying the floor
    push();
    this.floor.display();
    pop();

    //Displaying the basketball rim
    push();
    translate(0, width / 8, -500);
    texture(this.basketball);

    sphere(50);
    pop();
  }
}
// new BasketballField(floor, basketballRim, metal);
