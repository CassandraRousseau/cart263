class Books {
  //Creating rows of books in library parameters
  constructor(x, y, bookRow, booksTexture) {
    this.bookRow = bookRow;
    this.booksTexture = booksTexture;
    this.x = x * width;
    this.y = y * height;
    this.z = -1500;
    this.rotateY = 90;
    this.scale = 500;
  }
  //Preloading obj model and textures of books
  preload() {
    this.bookRow.preload();
    this.booksTexture.preload();
  }
  //Displaying rows of books in library
  display() {
    push();
    translate(this.x, this.y, this.z);
    rotateY(this.rotateY);
    scale(this.scale);
    texture(this.booksTexture);
    model(this.bookRow);
    pop();
  }
}
