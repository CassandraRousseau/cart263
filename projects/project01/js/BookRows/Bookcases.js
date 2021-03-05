class Bookcases {
  //Creating bookcases parameters
  constructor(x, bookcase, wood) {
    this.wood = wood;
    this.bookcase = bookcase;
    this.x = x * width;
    this.y = height / 2;
    this.z = -1500;
    this.rotateX = 0;
    this.rotateY = 0;
    this.rotateZ = 180;
    this.scale = 7;
  }
  //Preloading obj model and textures of bookcases
  preload() {
    this.bookcase.preload();
    this.wood.preload();
  }

  //Displaying bookcases
  display() {
    push();
    translate(this.x, this.y, this.z);
    rotateX(this.rotateX);
    rotateY(this.rotateY);
    rotateZ(this.rotateZ);
    scale(this.scale);
    texture(this.wood);
    model(this.bookcase);
    pop();
  }
}
