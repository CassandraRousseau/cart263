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
//Displaying bookcases
push();
translate(0, height / 2, -1500);
rotateX(0);
rotateY(0);
rotateZ(180);
scale(7, 7, 7);

texture(this.wood);

model(this.bookcase);
pop();

push();
translate(width, height / 2, -1500);
rotateX(0);
rotateY(0);
rotateZ(180);
scale(7, 7, 7);

texture(this.wood);

model(this.bookcase);
pop();
push();
translate(-width, height / 2, -1500);
rotateX(0);
rotateY(0);
rotateZ(180);
scale(7, 7, 7);

texture(this.wood);

model(this.bookcase);
pop();
