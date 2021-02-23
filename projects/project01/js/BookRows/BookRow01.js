class BookRow01 extends Books {
  constructor(booksTexture) {
    super(booksTexture);
    this.translateX = 0;
    this.translateY = 0;
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
    scale(1000, 1000, 1000);
    model(this.bookRow);
    pop();
  }
}
