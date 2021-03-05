class HallBuilding {
  //Creating hall of everything building  parameters
  constructor(x, y, z, w) {
    this.x = x * width;
    this.y = y * height;
    this.z = z;
    this.w = w * width;
    this.h = 600;
    this.fill = {
      r: 245,
      g: 255,
      b: 175,
    };
  }
  //Displaying hall of everything building
  display() {
    directionalLight(200, 250, 100, 100, 200, -500);
    push();
    translate(this.x, this.y, this.z);
    fill(this.fill.r, this.fill.g, this.fill.b);
    box(this.w, this.h);
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
//     late(this.x, this.y, this.z);
//     scale(this.scale);
//     text(this.texture);
//     model(this.model);
//     pop();
//   }
// }
