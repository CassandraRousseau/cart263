class BookStacks {
  //Creating rows of books stacks parameters
  constructor(x, rotateY, books, leather) {
    this.books = books;
    this.leather = leather;
    this.x = x * width;
    this.y = height / 1.62;
    this.z = -700;
    this.rotateX = 0;
    this.rotateY = rotateY;
    this.rotateZ = 180;
    this.scale = 7;
  }
  //Preloading obj model and textures of books stacks
  preload() {
    this.books.preload();
    this.leather.preload();
  }
  //Displaying book stacks
  display() {
    push();
    translate(this.x, this.y, this.z);
    rotateX(this.rotateX);
    rotateY(this.rotateY);
    rotateZ(this.rotateZ);
    scale(this.scale);
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
