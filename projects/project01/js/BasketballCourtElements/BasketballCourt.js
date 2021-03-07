class BasketballCourt extends State {
  //Setting basketball court parameters
  constructor({
    floor,
    basketball,
    fence,
    sky,
    basketballCourtBackgroundData,
  }) {
    super({ floor, basketball, fence, sky, basketballCourtBackgroundData });
    //Creating objects arrays
    this.courtFences = [];
    //Creating background
    for (let i = 0; i < basketballCourtBackgroundData.courtFences.length; i++) {
      let backgroundBasketballCourtData =
        basketballCourtBackgroundData.courtFences[i];
      this.wall = new BakeryBackground(
        backgroundBasketballCourtData.x,
        backgroundBasketballCourtData.z,
        backgroundBasketballCourtData.w,
        backgroundBasketballCourtData.rotateY,
        bakeryShop
      );
      this.courtFences.push(this.wall);
    }

    //Creating floor
    this.floor = new FloorHall(floor);

    //Creating sky
    this.sky = sky;

    //Creating basketball ball
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

    //Displaying the fence
    //Displaying the background
    for (let i = 0; i < this.courtFences.length; i++) {
      this.courtFences[i].display();
    }
    //Displaying the sky
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
    //Displaying the basketball ball
    push();
    translate(0, width / 8, -500);
    texture(this.basketball);
    sphere(50);
    pop();
  }
}
