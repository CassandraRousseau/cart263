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
    this.bookRow = bookRow;
    this.booksTexture = booksTexture;
    this.texture = libraryBackground;
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
    background(255);
    angleMode(DEGREES);

    push();
    // image(this.image, 0, 0, 1000, 1000);
    texture(this.texture);
    translate(0, 0, -800);
    plane(4 * width, 2 * height);
    pop();
    //Dispaying the floor
    push();
    this.floor.display();
    pop();

    //Displaying bookcases
    push();
    translate(0, height / 2, -1500);
    rotateX(0);
    rotateY(0);
    rotateZ(180);
    scale(7, 7, 7);

    texture(this.wood);

    model(this.bookcase);
    pop();
    push();
    translate(width, height / 2, -1500);
    rotateX(0);
    rotateY(0);
    rotateZ(180);
    scale(7, 7, 7);

    texture(this.wood);

    model(this.bookcase);
    pop();
    push();
    translate(-width, height / 2, -1500);
    rotateX(0);
    rotateY(0);
    rotateZ(180);
    scale(7, 7, 7);

    texture(this.wood);

    model(this.bookcase);
    pop();

    //Displaying shelves
    push();
    translate(-1.5 * width, height, -1000);
    rotateX(0);
    rotateY(90);
    rotateZ(180);
    scale(7, 10, 7);

    texture(this.wood);

    model(this.shelf);
    pop();
    push();
    translate(1.5 * width, height, -1000);
    rotateX(0);
    rotateY(-90);
    rotateZ(180);
    scale(7, 10, 7);

    texture(this.wood);

    model(this.shelf);
    pop();

    //Displaying book rows
    push();
    translate(1.5 * width, height / 1.25, -1000);
    rotateX(0);
    rotateY(-90);
    rotateZ(180);
    scale(7, 7, 7);

    texture(this.leather);

    model(this.books);
    pop();
    push();
    translate(-1.5 * width, height / 1.25, -1000);
    rotateX(0);
    rotateY(90);
    rotateZ(180);
    scale(7, 7, 7);

    texture(this.leather);

    model(this.books);
    pop();
    push();
    translate(0, height / 10, -1500);
    rotateY(90);
    scale(500, 500, 500);

    texture(this.booksTexture);

    model(this.bookRow);
    pop();
    push();
    translate(width, height / 10, -1500);
    rotateY(90);
    scale(500, 500, 500);

    texture(this.booksTexture);

    model(this.bookRow);
    pop();
    push();
    translate(-width, height / 10, -1500);
    rotateY(90);
    scale(500, 500, 500);

    texture(this.booksTexture);

    model(this.bookRow);
    pop();
    push();
    translate(-1.2 * width, -165, -1500);
    rotateY(90);
    scale(500, 500, 500);

    texture(this.booksTexture);

    model(this.bookRow);
    pop();
    push();
    translate(-1.1 * width, -400, -1500);
    rotateY(90);
    scale(500, 500, 500);

    texture(this.booksTexture);

    model(this.bookRow);
    pop();
    push();
    translate(-width, -650, -1500);
    rotateY(90);
    scale(500, 500, 500);

    texture(this.booksTexture);

    model(this.bookRow);
    pop();
    push();
    translate(-1.2 * width, -930, -1500);
    rotateY(90);
    scale(500, 500, 500);

    texture(this.booksTexture);

    model(this.bookRow);
    pop();
    push();
    translate(width / 1.15, -165, -1500);
    rotateY(90);
    scale(500, 500, 500);

    texture(this.booksTexture);

    model(this.bookRow);
    pop();
    push();
    translate(width / 1.05, -400, -1500);
    rotateY(90);
    scale(500, 500, 500);

    texture(this.booksTexture);

    model(this.bookRow);
    pop();
    push();
    translate(width / 1.1, -650, -1500);
    rotateY(90);
    scale(500, 500, 500);

    texture(this.booksTexture);

    model(this.bookRow);
    pop();
    push();
    translate(width, -925, -1500);
    rotateY(90);
    scale(500, 500, 500);

    texture(this.booksTexture);

    model(this.bookRow);
    pop();
    push();
    translate(-width / 10, -165, -1500);
    rotateY(90);
    scale(500, 500, 500);

    texture(this.booksTexture);

    model(this.bookRow);
    pop();
    push();
    translate(width / 110, -400, -1500);
    rotateY(90);
    scale(500, 500, 500);

    texture(this.booksTexture);

    model(this.bookRow);
    pop();
    push();
    translate(-width / 5, -650, -1500);
    rotateY(90);
    scale(500, 500, 500);

    texture(this.booksTexture);

    model(this.bookRow);
    pop();
    push();
    translate(-width / 6, -930, -1500);
    rotateY(90);
    scale(500, 500, 500);

    texture(this.booksTexture);

    model(this.bookRow);
    pop();
    push();
    translate(0, 20, 150);

    texture(this.wood);
    box(240, 70, 250);
    pop();
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
