class BookRow01 extends Books {
  constructor(bookRow, booksTexture) {
    super(bookRow, booksTexture);
    this.translateX = width / 2;
    this.translateY = height / 2;
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
