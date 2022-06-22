class Library extends State {
  //Setting library parameters
  constructor({
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
    bookcasesData,
    ceilingLibrary,
    libraryBackgroundData,
  }) {
    super({
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
      bookcasesData,
      ceilingLibrary,
      libraryBackgroundData,
    });

    //Creating floor
    this.floor = new FloorLibrary(carpet);

    //Creating wood texture
    this.wood = wood;

    //Creating ceiling
    this.ceiling = ceilingLibrary;

    //Creating objects arrays
    this.shelves = [];
    this.bookSeries = [];
    this.bookStacks = [];
    this.bookcases = [];
    this.libraryWalls = [];

    //Creating background
    for (let i = 0; i < libraryBackgroundData.libraryWalls.length; i++) {
      let backgroundLibraryData = libraryBackgroundData.libraryWalls[i];
      this.wall = new LibraryBackground(
        backgroundLibraryData.x,
        backgroundLibraryData.y,
        backgroundLibraryData.z,
        backgroundLibraryData.rotateY,
        libraryBackground
      );
      this.libraryWalls.push(this.wall);
    }

    //Creating shelves
    for (let i = 0; i < shelvesData.shelves.length; i++) {
      let dataShelves = shelvesData.shelves[i];
      this.shelf = new Shelves(dataShelves.x, dataShelves.rotateY, wood, shelf);
      this.shelves.push(this.shelf);
    }

    //Creating bookcases
    for (let i = 0; i < bookcasesData.bookcases.length; i++) {
      let dataBookcases = bookcasesData.bookcases[i];
      this.bookcase = new Bookcases(dataBookcases.x, bookcase, wood);
      this.bookcases.push(this.bookcase);
    }

    //Creating rows of books
    for (let i = 0; i < booksData.bookSeries.length; i++) {
      let data = booksData.bookSeries[i];
      this.book = new Books(data.x, data.y, bookRow, booksTexture);
      this.bookSeries.push(this.book);
    }

    //Creating book stacks
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
    this.ceiling.preload();
  }

  //Setting the environment
  draw() {
    super.draw();
    background(65, 50, 50);
    angleMode(DEGREES);

    //Displaying the background
    for (let i = 0; i < this.libraryWalls.length; i++) {
      this.libraryWalls[i].display();
    }

    //Displaying the ceiling
    push();
    texture(this.ceiling);
    translate(0, -height/0.88, -1000);
    rotateX(90);
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

    //Displaying bookcases
    for (let i = 0; i < this.bookcases.length; i++) {
      this.bookcases[i].display();
    }
    //Displaying book rows
    for (let i = 0; i < this.bookSeries.length; i++) {
      this.bookSeries[i].display();
    }
    //Displaying book stacks
    for (let i = 0; i < this.bookStacks.length; i++) {
      this.bookStacks[i].display();
    }

    //Displating counter
    push();
    translate(0, 200, 200);
    texture(this.wood);
    box(330, 110, 250);
    pop();
  }
}
