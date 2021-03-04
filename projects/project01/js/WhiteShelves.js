class WhiteShelves {
  //Creating rows of books parameters
  constructor(x, rotateY, whiteWood, shelf) {
    this.whiteWood = whiteWood;
    this.shelf = shelf;
    this.x = x * width;
    this.y = height / 1.3;
    this.z = -1500;
    this.rotateX = 0;
    this.rotateY = rotateY;
    this.rotateZ = 180;
    this.scaleX = 7;
    this.scaleY = 10;
    this.scaleZ = 7;
  }
  //Preloading obj model and textures of books
  preload() {
    this.whiteWood.preload();
    this.shelf.preload();
  }
  display() {
    push();
    translate(this.x, this.y, this.z);
    rotateX(this.rotateX);
    rotateY(this.rotateY);
    rotateZ(this.rotateZ);
    scale(this.scaleX, this.scaleY, this.scaleZ);
    texture(this.whiteWood);
    model(this.shelf);
    pop();
  }
}
// push();
// translate(0, height / 1.2, );
