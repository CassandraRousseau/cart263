class BookRow01 extends Books {
  constructor(bookRow, booksTexture) {
    super(bookRow, booksTexture);
    this.translateX =;
    this.translateY = ;
    this.booksTexture = booksTexture;
    this.bookRow = bookRow;
  }
  preload() {
    super.preload();
  }
  display() {
    super.display();
    push();
    translate(this.translateX, this.translateY, this.translateZ);
    rotateY(this.rotateY);
    scale(this.scaleX, this.scaleY, this.scaleZ);
    texture(this.booksTexture);
    model(this.bookRow);
    pop();
  }
}
