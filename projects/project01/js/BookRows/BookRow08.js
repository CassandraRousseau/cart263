class BookRow08 extends Books {
  constructor(booksTexture) {
    super(booksTexture);
    this.translateX = width / 1.15;
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
    scale(this.scaleX, this.scaleY, this.scaleZ);

    texture(this.booksTexture);

    model(this.bookRow);
    pop();
  }
}
