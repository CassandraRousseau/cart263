class Counters {
  //Creating counters
  constructor(x, wood) {
    this.x = x * width;
    this.y = 150;
    this.z = 200;
    this.width = 250;
    this.height = 100;
    this.depth = 400;
    this.texture = wood;
  }

  //Displaying counters
  display() {
    push();
    translate(this.x, this.y, this.z);
    texture(this.texture);
    box(this.width, this.height, this.depth);
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
