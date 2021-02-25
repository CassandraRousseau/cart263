class BookStacks {
  //Creating rows of books parameters
  constructor(x, rotateY, books, leather) {
    this.books = books;
    this.leather = leather;
    this.x = x;
    this.y = height / 1.25;
    this.z = -1000;
    this.rotateX = 0;
    this.rotateY = rotateY;
    this.rotateZ = 180;
    this.scaleX = 7;
    this.scaleY = 7;
    this.scaleZ = 7;
  }
  //Preloading obj model and textures of books
  preload() {
    this.books.preload();
    this.leather.preload();
  }
  display() {
    push();
    translate(this.x, this.y, this.z);
    rotateX(this.rotateX);
    rotateY(this.rotateY);
    rotateZ(this.rotateZ);
    scale(this.scaleX, this.scaleY, this.scaleZ);

    texture(this.leather);

    model(this.books);
    pop();
  }
}
// -------
//
// let booksData;
//
// function preload() {
//   booksData = loadJSON(`boooks.json`);
// }
//
// class Library {
//   constructor(booksData) {
//     this.books = [];
//     for (let i = 0; i < booksData.books.length; i++) {
//       let data = booksData.books[i];
//       let book = new Book(data.x, data.y);
//     }
//   }
// }
//
// class Book {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.model = bookRow;
//     this.text = booksTexture;
//     this.z = 0;
//     this.scale = 500;
//   }
//
//   display() {
//     push();
//     translate(this.x, this.y, this.z);
//     scale(this.scale);
//     text(this.texture);
//     model(this.model);
//     pop();
//   }
// }
