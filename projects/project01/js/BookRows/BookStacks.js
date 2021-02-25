class BookStacks {
  //Creating rows of books parameters
  constructor(books, leather, x, rotateY) {
    this.books = books;
    this.leather = leather;
    this.x = x;
    this.y = height / 1.25;
    this.z = -1000;
    this.rotateX = 0;
    this.rotateY = rotateY;
    this.rotateZ = 180;
    this.scaleX = 7;
    this.scaleY = 7;
    this.scaleZ = 7;
  }
  //Preloading obj model and textures of books
  preload() {
    this.books.preload();
    this.leather.preload();
  }
  display() {
    push();
    translate(this.x, this.y, this.z);
    rotateX(this.rotateX);
    rotateY(this.rotateY);
    rotateZ(this.rotateZ);
    scale(this.scaleX, this.scaleY, this.scaleZ);

    texture(this.leather);

    model(this.books);
    pop();
  }
}
