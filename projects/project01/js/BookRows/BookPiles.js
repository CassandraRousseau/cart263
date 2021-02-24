class Books {
  //Creating rows of books parameters
  constructor(bookRow, booksTexture, translateX, translateY) {
    this.bookRow = bookRow;
    this.booksTexture = booksTexture;
    this.translateX = translateX;
    this.translateY = translateY;
    this.translateZ = 0;
    this.rotateY = 90;
    this.scaleX = 500;
    this.scaleY = 500;
    this.scaleZ = 500;
  }
  //Preloading obj model and textures of books
  preload() {
    this.bookRow.preload();
    this.booksTexture.preload();
  }
  display() {}
}
push();
translate(1.5 * width, height / 1.25, -1000);
rotateX(0);
rotateY(-90);
rotateZ(180);
scale(7, 7, 7);

texture(this.leather);

model(this.books);
pop();
push();
translate(-1.5 * width, height / 1.25, -1000);
rotateX(0);
rotateY(90);
rotateZ(180);
scale(7, 7, 7);

texture(this.leather);

model(this.books);
pop();
this.books = books;
this.leather = leather;