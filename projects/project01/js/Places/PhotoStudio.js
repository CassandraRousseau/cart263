class PhotoStudio extends State {
  //Setting the parameters
  constructor(shelf, floor, whiteWood, camera, cameraTexture) {
    super(shelf, floor, whiteWood, camera, cameraTexture);
    this.floor = new FloorHall(floor);
    this.shelf = shelf;
    this.whiteWood = whiteWood;
    this.camera = camera;
    this.cameraTexture = cameraTexture;
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

    //Displaying the floor
    push();
    this.floor.display();
    pop();

    //Displaying the shelves
    push();
    translate(0, height / 1.2, -1500);
    rotateX(0);
    rotateY(360);
    rotateZ(180);
    scale(7, 10, 7);

    texture(this.whiteWood);

    model(this.shelf);
    pop();
    push();
    translate(-width, height / 1.3, -1500);
    rotateX(0);
    rotateY(-330);
    rotateZ(180);
    scale(7, 10, 7);

    texture(this.whiteWood);

    model(this.shelf);
    pop();
    push();
    translate(width, height / 1.3, -1500);
    rotateX(0);
    rotateY(330);
    rotateZ(180);
    scale(7, 10, 7);

    texture(this.whiteWood);

    model(this.shelf);
    pop();

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
// new PhotoStudio(shelf, floor, whiteWood, camera, cameraTexture);
