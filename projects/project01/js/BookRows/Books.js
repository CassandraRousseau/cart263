class Books {
  //Creating rows of books parameters
  constructor(x, y, bookRow, booksTexture) {
    this.bookRow = bookRow;
    this.booksTexture = booksTexture;
    this.x = x;
    this.y = y;
    this.z = 0;
    this.rotateY = 90;
    this.scale = 500;
  }
  //Preloading obj model and textures of books
  preload() {
    this.bookRow.preload();
    this.booksTexture.preload();
  }
  display() {
    push();
    translate(this.x, this.y, this.z);
    rotateY(this.rotateY);
    scale(this.scale);
    texture(this.booksTexture);
    model(this.bookRow);
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
