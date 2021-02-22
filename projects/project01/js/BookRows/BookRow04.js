class BookRow04 extends Books {
  constructor(booksTexture) {
    super(booksTexture);
    this.translateX = -1.2 * width;
    this.translateY = -165;
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
