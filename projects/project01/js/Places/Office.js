class Office extends State {
  //Creating office parameters
  constructor(
    desk,
    floor,
    wood,
    legalPad,
    paperPunch,
    metal,
    notebook,
    pen,
    pencilHolder
  ) {
    super(
      desk,
      floor,
      wood,
      legalPad,
      paperPunch,
      metal,
      notebook,
      pen,
      pencilHolder
    );
    this.desk = desk;
    this.wood = wood;
    this.pen = pen;
    this.legalPad = legalPad;
    this.metal = metal;
    this.paperPunch = paperPunch;
    this.notebook = notebook;
    this.pencilHolder = pencilHolder;
    this.floor = new FloorHall(floor);
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
  }

  //Setting the location
  draw() {
    super.draw();
    background(255);
    angleMode(DEGREES);

    //Creating floor
    push();
    this.floor.display();
    pop();
    push();
    translate(0, height / 3, -100);
    rotateX(190);
    rotateY(90);
    rotateZ(0);
    scale(25, 25, 25);
    texture(this.wood);
    model(this.desk);
    pop();

    //Creating legal pad
    push();
    translate(0, -18, -10);
    scale(25, 25, 25);
    fill(200, 203, 10);
    model(this.legalPad);
    pop();

    //Creating paper punch
    push();
    translate(width / 1.5, -18, -1000);
    rotateX(180);
    rotateY(0);
    rotateZ(0);
    scale(15, 15, 15);

    texture(metal);
    model(this.paperPunch);
    pop();

    //Creating pen
    push();
    translate(-width / 6, -21, -100);
    rotateX(180);
    rotateY(180);
    rotateZ(180);
    scale(5, 5, 5);
    fill(0);
    model(this.pen);
    pop();

    //Creating pencil holder
    push();
    translate(-width / 3, -50, -100);
    rotateX(180);
    rotateY(180);
    rotateZ(180);

    fill(150);
    model(this.pencilHolder);
    pop();
  }
}
// new Office(
//   desk,
//   floor,
//   wood,
//   legalPad,
//   paperPunch,
//   metal,
//   notebook,
//   pen,
//   pencilHolder
// );
