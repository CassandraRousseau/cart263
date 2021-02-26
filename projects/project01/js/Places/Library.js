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
    booksStacksData,
    shelvesData,
    bookcasesData
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
      booksStacksData,
      shelvesData,
      bookcasesData
    );
    this.floor = new FloorLibrary(carpet);
    this.wood = wood;
    this.texture = libraryBackground;
    this.shelves = [];
    this.bookSeries = [];
    this.bookStacks = [];
    this.bookcases = [];
    for (let i = 0; i < shelvesData.shelves.length; i++) {
      let dataShelves = shelvesData.shelves[i];
      this.shelf = new Shelves(dataShelves.x, dataShelves.rotateY, wood, shelf);
      this.shelves.push(this.shelf);
    }
    for (let i = 0; i < bookcasesData.bookcases.length; i++) {
      let dataBookcases = bookcasesData.bookcases[i];
      this.bookcase = new Bookcases(dataBookcases.x, bookcase, wood);
      this.bookcases.push(this.bookcase);
    }
    for (let i = 0; i < booksData.bookSeries.length; i++) {
      let data = booksData.bookSeries[i];
      this.book = new Books(data.x, data.y, bookRow, booksTexture);
      this.bookSeries.push(this.book);
    }

    for (let i = 0; i < booksStacksData.bookStacks.length; i++) {
      let dataStack = booksStacksData.bookStacks[i];
      this.bookStack = new BookStacks(
        dataStack.x,
        dataStack.rotateY,
        books,
        leather
      );
      this.bookStacks.push(this.bookStack);
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

    push();

    texture(this.texture);
    translate(0, -height / 4, -2500);
    plane(4 * width, 2 * height);
    pop();
    // Dispaying the floor
    push();
    this.floor.display();
    pop();

    //Displaying shelves

    for (let i = 0; i < this.shelves.length; i++) {
      this.shelves[i].display();
    }
    for (let i = 0; i < this.bookcases.length; i++) {
      this.bookcases[i].display();
    }
    for (let i = 0; i < this.bookSeries.length; i++) {
      this.bookSeries[i].display();
    }
    //
    for (let i = 0; i < this.bookStacks.length; i++) {
      this.bookStacks[i].display();
    }
    push();
    translate(0, 100, 200);

    texture(this.wood);
    box(330, 110, 250);
    pop();
  }
}
