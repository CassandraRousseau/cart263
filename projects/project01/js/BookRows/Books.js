class Books {
  constructor(bookRow, booksTexture, translateX, translateY) {
    this.bookRow = bookRow;
    this.booksTexture = booksTexture;
    this.translateX = translateX;
    this.translateY = translateY;
    this.translateZ = 0;
    this.rotateY = 90;
    this.scale = 500;
    this.scaleY = 500;
    this.scaleZ = 500;
  }
  preload() {
    this.bookRow.preload();
    this.booksTexture.preload();
  }
  display() {}
}
