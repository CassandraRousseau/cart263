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
    booksData,
    booksStacksData
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
      booksData,
      booksStacksData
    );
    this.floor = new FloorLibrary(carpet);

    this.bookcase = bookcase;

    this.texture = libraryBackground;
    this.bookRows = [];
    this.bookStacks = [];
    for (let i = 0; i < booksData.bookRows.length; i++) {
      let data = booksData.bookRows[i];
      this.book = new Books(data.x, data.y, bookRow, booksTexture);
    }

    for (let i = 0; i < booksStacksData.bookStacks.length; i++) {
      let dataStack = booksStacksData.booksStacks[i];
      this.bookStack = new BookStacks(
        dataStack.x,
        dataStack.rotateY,
        books,
        leather
      );
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
    for (let i = 0; i < booksData.bookRows.length; i++) {
      let bookObject = booksData.bookRows[i];
      bookObject.display();
    }
    for (let i = 0; i < booksData.bookStacks.length; i++) {
      let bookStackObject = booksData.bookStacks[i];
      bookStackObject.display();
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
