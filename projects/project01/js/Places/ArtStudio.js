class ArtStudio extends State {
  constructor(
    tissue,
    canvas,
    blueAbstractArt,
    pinkAbstractArt,
    whiteAbstractArt,
    brushes
  ) {
    super(
      tissue,
      canvas,
      blueAbstractArt,
      pinkAbstractArt,
      whiteAbstractArt,
      brushes
    );
    this.floor = new FloorHall(tissue);
    this.canvas = canvas;
    this.blueAbstractArt = blueAbstractArt;
    this.pinkAbstractArt = pinkAbstractArt;
    this.whiteAbstractArt = whiteAbstractArt;
    this.brushes = brushes;
  }
  preload() {
    super.preload();
    this.floor.preload();
    this.canvas.preload();
    this.blueAbstractArt.preload();
    this.pinkAbstractArt.preload();
    this.whiteAbstractArt.preload();
    this.brushes.preload();
  }
  draw() {
    super.draw();
    background(0);
    angleMode(DEGREES);
    push();
    this.floor.display();
    pop();
    push();
    translate(-width / 4, height / 5, 100);
    rotateX(0);
    rotateY(-140);
    rotateZ(180);
    scale(5, 5, 5);
    texture(this.blueAbstractArt);
    model(this.canvas);
    pop();
    push();
    translate(0, -height / 2, -1000);
    rotateX(90);
    rotateY(0);
    rotateZ(0);
    scale(10, 10, 10);
    texture(this.pinkAbstractArt);
    model(this.canvas);
    pop();
    push();
    translate(width, -height / 2, -1000);
    rotateX(-360);
    rotateY(0);
    rotateZ(-270);
    scale(10, 10, 10);
    texture(this.whiteAbstractArt);
    model(this.canvas);
    pop();
    // push();
    // translate(0, -200, -400);
    // // rotateX(360);
    // // rotateY(90);
    // // rotateZ(100);
    // scale(500000, 50000, 50000);
    // // texture(this.whiteAbstractArt);
    // fill(0);
    // model(this.brushes);
    // pop();
  }
}
// new ArtStudio(
//  tissue,
//  canvas,
//  blueAbstractArt,
//  pinkAbstractArt,
//  whiteAbstractArt,
//  brushes
// );
