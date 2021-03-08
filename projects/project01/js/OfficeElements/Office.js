class Office extends State {
  //Creating office parameters
  constructor({
    desk,
    floor,
    wood,
    legalPad,
    paperPunch,
    metal,
    notebook,
    pen,
    pencilHolder,
    ovalOffice,
    blueCarpet,
    ceilingOffice,
    officeBackgroundData,
    doughnut8,
    officeSeatsData,
    cushion,
  }) {
    super({
      desk,
      floor,
      wood,
      legalPad,
      paperPunch,
      metal,
      notebook,
      pen,
      pencilHolder,
      ovalOffice,
      blueCarpet,
      ceilingOffice,
      officeBackgroundData,
      doughnut8,
      officeSeatsData,
      cushion,
    });

    //Creating the desk
    this.desk = desk;

    //Creating the wood texture
    this.wood = wood;

    //Creating the pen
    this.pen = pen;

    //Creating the legal pad
    this.legalPad = legalPad;

    //Creating metal texture
    this.metal = metal;

    //Creating the paper punch
    this.paperPunch = paperPunch;

    //Creating the notebook
    this.notebook = notebook;

    //Creating the pencil holder
    this.pencilHolder = pencilHolder;

    //Creating the carpet
    this.carpet = blueCarpet;

    //Creating the ceiling
    this.ceiling = ceilingOffice;

    //Creating objects arrays
    this.officeWalls = [];
    this.officeSeats = [];

    //Creating background
    for (let i = 0; i < officeBackgroundData.officeWalls.length; i++) {
      let backgroundData = officeBackgroundData.officeWalls[i];
      this.wall = new OfficeBackground(
        backgroundData.x,
        backgroundData.z,
        backgroundData.rotateY,
        ovalOffice
      );
      this.officeWalls.push(this.wall);
    }
    for (let i = 0; i < officeSeatsData.officeSeats.length; i++) {
      let data = officeSeatsData.officeSeats[i];
      this.seat = new SeatsOffice(data.x, data.rotateX, doughnut8, cushion);
      this.officeSeats.push(this.seat);
    }
  }

  //Preloading images and obj files
  preload() {
    super.preload();
    this.floor.preload();
    this.desk.preload();
    this.wood.preload();
    this.pen.preload();
    this.pencilHolder.preload();
    this.paperPunch.preload();
    this.notebook.preload();
    this.legalPad.preload();
    this.metal.preload();
    this.texture.preload();
  }

  //Setting the location
  draw() {
    super.draw();
    background(255);
    angleMode(DEGREES);

    //Displaying background

    //Displaying the background
    for (let i = 0; i < this.officeWalls.length; i++) {
      this.officeWalls[i].display();
    }

    //Displaying ceiling
    push();
    texture(this.ceiling);
    translate(0, -height, -1000);
    rotateX(90);
    plane(4 * width, 2 * height);
    pop();

    //Displaying carpet
    push();
    translate(0, height / 4, 0);
    texture(this.carpet);
    box(3 * width, 100, 3000);
    pop();

    //Displaying desk
    push();
    translate(0, height / 5, -100);
    rotateX(180);
    rotateY(-90);
    rotateZ(0);
    scale(25, 25, 25);
    texture(this.wood);
    model(this.desk);
    pop();

    //Displaying legal pad
    push();
    translate(0, 10, -10);
    scale(25, 25, 25);
    fill(200, 203, 10);
    model(this.legalPad);
    pop();

    //Displaying paper punch
    push();
    translate(width / 4, 35, -1000);
    rotateX(180);
    rotateY(0);
    rotateZ(0);
    scale(15, 15, 15);
    texture(metal);
    model(this.paperPunch);
    pop();

    //Displaying pen
    push();
    translate(-width / 12, 5, 100);
    rotateX(180);
    rotateY(180);
    rotateZ(180);
    scale(5, 5, 5);
    fill(0);
    model(this.pen);
    pop();

    //Displaying pencil holder
    push();
    translate(-width / 20, -5, 0);
    rotateX(180);
    rotateY(180);
    rotateZ(180);
    scale(0.25, 0.25, 0.25);
    fill(150);
    model(this.pencilHolder);
    pop();

    //Displaying seats
    for (let i = 0; i < this.officeSeats.length; i++) {
      this.officeSeats[i].display();
    }
  }
}
