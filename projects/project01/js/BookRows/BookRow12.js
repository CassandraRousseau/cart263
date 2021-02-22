class BookRow12 extends Books {
  constructor() {
    super();
    this.translateX = -width / 10;
    this.translateY = -165;
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
