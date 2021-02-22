class BookRow10 extends Books {
  constructor(booksTexture) {
    super(booksTexture);
    this.translateX = width / 1.1;
    this.translateY = -650;
    this.booksTexture = booksTexture;
  }
  preload() {
    super.preload();
  }
  display() {
    super.display();
    push();
    translate(this.translateX, this.translateY, this.translateZ);
    rotateY(this.rotateY);
    scale(this.scale, this.scaleY, this.scaleZ);

    texture(this.booksTexture);

    model(this.bookRow);
    pop();
  }
}
