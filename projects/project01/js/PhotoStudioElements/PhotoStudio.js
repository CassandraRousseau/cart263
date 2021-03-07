class PhotoStudio extends State {
  //Setting Photo Studio parameters
  constructor({
    shelf,
    floor,
    whiteWood,
    cam,
    cameraTexture,
    photoBackground,
    whiteShelvesData,
    blackCarpet,
    photoStudioBackgroundData,
  }) {
    super({
      shelf,
      floor,
      whiteWood,
      cam,
      cameraTexture,
      photoBackground,
      whiteShelvesData,
      blackCarpet,
      photoStudioBackgroundData,
    });

    //Creating camera
    this.cam = cam;

    //Creating camera texture
    this.cameraTexture = cameraTexture;

    //Creating carpet
    this.carpet = blackCarpet;

    //Creating shelves array
    this.whiteShelves = [];
    this.photoStudioWalls = [];

    //Creating background
    for (
      let i = 0;
      i < photoStudioBackgroundData.photoStudioWalls.length;
      i++
    ) {
      let backgroundPhotoStudioData =
        photoStudioBackgroundData.photoStudioWalls[i];
      this.wall = new PhotoStudioBackground(
        backgroundPhotoStudioData.x,
        backgroundPhotoStudioData.y,
        backgroundPhotoStudioData.z,
        backgroundPhotoStudioData.rotateX,
        backgroundPhotoStudioData.rotateY,
        photoBackground
      );
      this.photoStudioWalls.push(this.wall);
    }

    //Creating shelves
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
    //Displaying the background
    for (let i = 0; i < this.photoStudioWalls.length; i++) {
      this.photoStudioWalls[i].display();
    }

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
    model(this.cam);
    pop();
  }
}
