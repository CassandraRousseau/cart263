class PhotoStudio extends State {
  //Setting Photo Studio parameters
  constructor(
    shelf,
    floor,
    whiteWood,
    camera,
    cameraTexture,
    photoBackground,
    whiteShelvesData,
    blackCarpet
  ) {
    super(
      shelf,
      floor,
      whiteWood,
      camera,
      cameraTexture,
      photoBackground,
      whiteShelvesData,
      blackCarpet
    );
    this.camera = camera;
    this.cameraTexture = cameraTexture;
    this.background = photoBackground;
    this.carpet = blackCarpet;
    this.whiteShelves = [];
    for (let i = 0; i < whiteShelvesData.whiteShelves.length; i++) {
      let dataWhiteShelves = whiteShelvesData.whiteShelves[i];
      this.whiteshelf = new WhiteShelves(
        dataWhiteShelves.x,
        dataWhiteShelves.rotateY,
        whiteWood,
        shelf
      );
      this.whiteShelves.push(this.whiteshelf);
    }
  }

  //Preloading obj files and images
  preload() {
    super.preload();
    this.floor.preload();
    this.shelf.preload();
    this.camera.preload();
    this.cameraTexture.preload();
    this.whiteWood.preload();
  }

  //Setting the environment
  draw() {
    super.draw();
    background(255);
    angleMode(DEGREES);

    //Displaying background
    push();
    texture(this.background);
    translate(2 * width, -height / 3, -2000);
    rotateY(-90);
    plane(4 * width, 2 * height);
    pop();
    push();
    texture(this.background);
    translate(-2 * width, -height / 3, -2000);
    rotateY(90);
    plane(4 * width, 2 * height);
    pop();
    push();
    texture(this.background);
    translate(0, -height / 4, -2500);
    plane(4 * width, 2 * height);
    pop();
    push();
    texture(this.background);
    translate(0, -height, -1000);
    rotateX(90);
    plane(4 * width, 2 * height);
    pop();

    //Displaying carpet
    push();
    translate(0, height / 4, 0);
    texture(this.carpet);
    box(3 * width, 100, 3000);
    pop();

    //Displaying the white shelves
    for (let i = 0; i < this.whiteShelves.length; i++) {
      this.whiteShelves[i].display();
    }
    //Dispalying the camera
    push();
    translate(width / 4, -250, -500);
    rotateX(0);
    rotateY(360);
    rotateZ(180);
    scale(0.35, 0.35, 0.35);
    texture(this.cameraTexture);
    model(this.camera);
    pop();
  }
}
