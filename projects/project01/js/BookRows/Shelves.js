class Shelves {
  //Creating shelves parameters
  constructor(x, rotateY, wood, shelf) {
    this.wood = wood;
    this.shelf = shelf;
    this.x = x * width;
    this.y = height;
    this.z = -700;
    this.rotateX = 0;
    this.rotateY = rotateY;
    this.rotateZ = 180;
    this.scaleX = 7;
    this.scaleY = 10;
    this.scaleZ = 7;
  }
  //Preloading obj model and textures of shelves
  preload() {
    this.wood.preload();
    this.shelf.preload();
  }

  //Displaying shelves
  display() {
    push();
    translate(this.x, this.y, this.z);
    rotateX(this.rotateX);
    rotateY(this.rotateY);
    rotateZ(this.rotateZ);
    scale(this.scaleX, this.scaleY, this.scaleZ);
    texture(this.wood);
    model(this.shelf);
    pop();
  }
}
