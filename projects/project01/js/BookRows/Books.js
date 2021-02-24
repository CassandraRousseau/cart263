class Books {
  //Creating rows of books parameters
  constructor(bookRow, booksTexture, translateX, translateY) {}
  //Preloading obj model and textures of books
  preload() {
    this.bookRow.preload();
    this.booksTexture.preload();
  }
  display() {}
}
