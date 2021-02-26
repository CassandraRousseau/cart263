class Counters {
  constructor(x) {
    this.x = x * width;
    this.y = 150;
    this.z = 200;

    this.width = 250;
    this.height = 100;
    this.depth = 400;
    this.fill = {
      r: 255,
      g: 255,
      b: 150,
    };
  }
  display() {
    push();

    // Our central cube is white
    translate(this.x, this.y, this.z);
    fill(this.fill.r, this.fill.g, this.fill.b);
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
