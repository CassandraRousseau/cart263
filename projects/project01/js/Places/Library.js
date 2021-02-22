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
    carpet
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
      carpet
    );
    this.floor = new FloorLibrary(carpet);
    this.shelf = shelf;
    this.bookcase = bookcase;
    this.wood = wood;
    this.books = books;
    this.leather = leather;
    this.texture = libraryBackground;
    this.bookRows = [];

    for (let i = 0; i < numRows; i++) {
      this.bookRow01 = new BookRow01(bookRow, booksTexture);

      this.bookRows.push(this.bookRow01);
    }

    for (let i = 0; i < numRows; i++) {
      this.bookRow02 = new BookRow02(bookRow, booksTexture);

      this.bookRows.push(this.bookRow02);
    }

    for (let i = 0; i < numRows; i++) {
      this.bookRow03 = new BookRow03(bookRow, booksTexture);

      this.bookRows.push(this.bookRow03);
    }

    for (let i = 0; i < numRows; i++) {
      this.bookRow04 = new BookRow04(bookRow, booksTexture);

      this.bookRows.push(this.bookRow04);
    }

    for (let i = 0; i < numRows; i++) {
      this.bookRow05 = new BookRow05(bookRow, booksTexture);

      this.bookRows.push(this.bookRow05);
    }

    for (let i = 0; i < numRows; i++) {
      this.bookRow06 = new BookRow06(bookRow, booksTexture);

      this.bookRows.push(this.bookRow06);
    }

    for (let i = 0; i < numRows; i++) {
      this.bookRow07 = new BookRow07(bookRow, booksTexture);

      this.bookRows.push(this.bookRow07);
    }

    for (let i = 0; i < numRows; i++) {
      this.bookRow08 = new BookRow08(bookRow, booksTexture);

      this.bookRows.push(this.bookRow08);
    }
    for (let i = 0; i < numRows; i++) {
      this.bookRow09 = new BookRow09(bookRow, booksTexture);

      this.bookRows.push(this.bookRow09);
    }

    for (let i = 0; i < numRows; i++) {
      this.bookRow10 = new BookRow10(bookRow, booksTexture);

      this.bookRows.push(this.bookRow10);
    }

    for (let i = 0; i < numRows; i++) {
      this.bookRow11 = new BookRow11(bookRow, booksTexture);

      this.bookRows.push(this.bookRow11);
    }

    for (let i = 0; i < numRows; i++) {
      this.bookRow12 = new BookRow12(bookRow, booksTexture);

      this.bookRows.push(this.bookRow12);
    }
    for (let i = 0; i < numRows; i++) {
      this.bookRow13 = new BookRow13(bookRow, booksTexture);

      this.bookRows.push(this.bookRow13);
    }
    for (let i = 0; i < numRows; i++) {
      this.bookRow14 = new BookRow14(bookRow, booksTexture);

      this.bookRows.push(this.bookRow14);
    }
    for (let i = 0; i < numRows; i++) {
      this.bookRow15 = new BookRow15(bookRow, booksTexture);

      this.bookRows.push(this.bookRow15);
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
    // push();
    // this.floor.display();
    // pop();

    // //Displaying bookcases
    // push();
    // translate(0, height / 2, -1500);
    // rotateX(0);
    // rotateY(0);
    // rotateZ(180);
    // scale(7, 7, 7);
    //
    // texture(this.wood);
    //
    // model(this.bookcase);
    // pop();
    // push();
    // translate(width, height / 2, -1500);
    // rotateX(0);
    // rotateY(0);
    // rotateZ(180);
    // scale(7, 7, 7);
    //
    // texture(this.wood);
    //
    // model(this.bookcase);
    // pop();
    // push();
    // translate(-width, height / 2, -1500);
    // rotateX(0);
    // rotateY(0);
    // rotateZ(180);
    // scale(7, 7, 7);
    //
    // texture(this.wood);
    //
    // model(this.bookcase);
    // pop();
    //
    // //Displaying shelves
    // push();
    // translate(-1.5 * width, height, -1000);
    // rotateX(0);
    // rotateY(90);
    // rotateZ(180);
    // scale(7, 10, 7);
    //
    // texture(this.wood);
    //
    // model(this.shelf);
    // pop();
    // push();
    // translate(1.5 * width, height, -1000);
    // rotateX(0);
    // rotateY(-90);
    // rotateZ(180);
    // scale(7, 10, 7);
    //
    // texture(this.wood);
    //
    // model(this.shelf);
    // pop();
    //
    // //Displaying book rows
    // push();
    // translate(1.5 * width, height / 1.25, -1000);
    // rotateX(0);
    // rotateY(-90);
    // rotateZ(180);
    // scale(7, 7, 7);
    //
    // texture(this.leather);
    //
    // model(this.books);
    // pop();
    // push();
    // translate(-1.5 * width, height / 1.25, -1000);
    // rotateX(0);
    // rotateY(90);
    // rotateZ(180);
    // scale(7, 7, 7);
    //
    // texture(this.leather);
    //
    // model(this.books);
    // pop();
    for (let i = 0; i < this.books.length; i++) {
      let booksObject = this.bookRows[i];

      booksObject.display();
    }
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
