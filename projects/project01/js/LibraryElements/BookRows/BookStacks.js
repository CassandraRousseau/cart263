class BookStacks {
  //Creating rows of books stacks parameters in library
  constructor(x, rotateY, books, leather) {
    this.books = books;
    this.leather = leather;
    this.x = x * width;
    this.y = height / 1.62;
    this.z = -700;
    this.rotateX = 0;
    this.rotateY = rotateY;
    this.rotateZ = 180;
    this.scale = 7;
  }
  //Preloading obj model and textures of books stacks
  preload() {
    this.books.preload();
    this.leather.preload();
  }
  //Displaying book stacks in library
  display() {
    push();
    translate(this.x, this.y, this.z);
    rotateX(this.rotateX);
    rotateY(this.rotateY);
    rotateZ(this.rotateZ);
    scale(this.scale);
    texture(this.leather);
    model(this.books);
    pop();
  }
}
