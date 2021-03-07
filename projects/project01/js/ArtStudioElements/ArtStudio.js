class ArtStudio extends State {
  //Setting art studio parameters
  constructor({
    tissue,
    canvas,
    blueAbstractArt,
    pinkAbstractArt,
    whiteAbstractArt,
    studioWall,
    ceilingArt,
  }) {
    super({
      tissue,
      canvas,
      blueAbstractArt,
      pinkAbstractArt,
      whiteAbstractArt,
      studioWall,
      ceilingArt,
    });

    //Creating floor
    this.floor = new FloorStudio(tissue);

    //Creating canvas
    this.canvas = canvas;

    //Creating ceiling
    this.ceiling = ceilingArt;

    //Creating abstract paintings
    this.blueAbstractArt = blueAbstractArt;
    this.pinkAbstractArt = pinkAbstractArt;
    this.whiteAbstractArt = whiteAbstractArt;

    //Creating the displayed walls
    this.texture = studioWall;
  }

  //Preloading obj files and images
  preload() {
    super.preload();
    this.floor.preload();
    this.canvas.preload();
    this.blueAbstractArt.preload();
    this.pinkAbstractArt.preload();
    this.whiteAbstractArt.preload();
    this.texture.preload();
  }

  //Setting the environment
  draw() {
    super.draw();
    background(0);
    angleMode(DEGREES);

    //Displaying background
    push();
    texture(this.texture);
    translate(2 * width, -100, -2000);
    rotateY(-90);
    plane(4 * width, 2 * height);
    pop();
    push();
    texture(this.texture);
    translate(-2 * width, -100, -2000);
    rotateY(90);
    plane(4 * width, 2 * height);
    pop();
    push();
    texture(this.texture);
    translate(0, -100, -1000);
    plane(4 * width, 2 * height);
    pop();

    //Displaying ceiling
    push();
    texture(this.ceiling);
    translate(0, -height, -1000);
    rotateX(90);
    plane(4 * width, 2 * height);
    pop();

    //Displaying the floor
    push();
    this.floor.display();
    pop();

    //Displaying the abstract blue painting
    push();
    translate(-width / 4, height / 5, 100);
    rotateX(0);
    rotateY(-140);
    rotateZ(180);
    scale(5, 5, 5);
    texture(this.blueAbstractArt);
    model(this.canvas);
    pop();

    //Displaying the abstract pink painting
    push();
    translate(0, -height / 2, -1000);
    rotateX(90);
    rotateY(0);
    rotateZ(0);
    scale(10, 10, 10);
    texture(this.pinkAbstractArt);
    model(this.canvas);
    pop();

    //Displaying the abstract white painting
    push();
    translate(2 * width, -height / 2, -1000);
    rotateX(-360);
    rotateY(0);
    rotateZ(-270);
    scale(10, 10, 10);
    texture(this.whiteAbstractArt);
    model(this.canvas);
    pop();
  }
}
