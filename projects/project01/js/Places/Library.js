class Library extends State {
  //Setting the parameters
  constructor(
    floor,
    wood,
    shelf,
    bookcase,
    books,
    leather,
    bookRow,
    booksTexture,
    libraryBackground,
    carpet,
    booksData
  ) {
    super(
      floor,
      wood,
      shelf,
      bookcase,
      books,
      leather,
      bookRow,
      booksTexture,
      libraryBackground,
      carpet,
      booksData
    );
    this.floor = new FloorLibrary(carpet);

    this.bookcase = bookcase;

    this.texture = libraryBackground;
    this.bookRows = [];

    for (let i = 0; i < booksData.books.length; i++) {
      let data = booksData.books[i];
      this.book = new Books(data.x, data.y, bookRow, booksTexture);
      booksData.books.push(this.book);
    }
  }

  //Preloading images and obj files
  preload() {
    super.preload();
    this.floor.preload();
    this.shelf.preload();
    this.bookcase.preload();
    this.wood.preload();
    this.books.preload();
    this.leather.preload();
    this.bookRow.preload();
    this.booksTexture.preload();
    this.texture.preload();
  }

  //Setting the environment
  draw() {
    super.draw();
    background(65, 50, 50);
    angleMode(DEGREES);

    // push();
    //
    // texture(this.texture);
    // translate(0, -height / 4, -2500);
    // plane(4 * width, 2 * height);
    // pop();
    //Dispaying the floor
    push();
    this.floor.display();
    pop();

    //
    //Displaying shelves

    //
    // //Displaying book rows

    push();
    for (let i = 0; i < booksData.books.length; i++) {
      this.book = booksData.books[i];
      this.book.display();
    }

    pop();
    // push();
    // translate(0, 20, 150);
    //
    // texture(this.wood);
    // box(240, 70, 250);
    // pop();
  }
}
// new Library(
//  floor,
//  wood,
//  shelf,
//  bookcase,
//  books,
//  leather,
//  bookRow,
//  booksTexture
// );
// let bookData = [
//   {
//     title: "War and Peace",
//     x: 100,
//     y: 100
//   },
//   {
//     title: "Moby Dick",
//     x: 100,
//     y: 200
//   }
// ];
// let books = [];
//
// for (let i = 0; i < bookData.length; i++) {
//   let data = bookData[i];
//   let book = new Book(data.title, data.x, data.y);
//   books.push(book);
// }
