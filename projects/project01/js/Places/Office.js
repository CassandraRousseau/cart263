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
    pencilHolder,
    ovalOffice,
    blueCarpet,
    ceilingOffice
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
      pencilHolder,
      ovalOffice,
      blueCarpet,
      ceilingOffice
    );
    this.desk = desk;
    this.wood = wood;
    this.pen = pen;
    this.legalPad = legalPad;
    this.metal = metal;
    this.paperPunch = paperPunch;
    this.notebook = notebook;
    this.pencilHolder = pencilHolder;
    this.texture = ovalOffice;
    this.carpet = blueCarpet;
    this.ceiling = ceilingOffice;
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

    push();

    texture(this.texture);
    translate(2 * width, -height / 3, -2000);
    rotateY(-90);
    plane(4 * width, 2 * height);
    pop();
    push();

    texture(this.texture);
    translate(-2 * width, -height / 3, -2000);
    rotateY(90);
    plane(4 * width, 2 * height);
    pop();
    //Creating background
    push();
    // image(this.image, 0, 0, 1000, 1000);
    texture(this.texture);
    translate(0, -height / 3, -1000);
    plane(4 * width, 2 * height);
    pop();
    push();
    texture(this.ceiling);
    translate(0, -height, -1000);
    rotateX(90);
    plane(4 * width, 2 * height);
    pop();
    //Creating floor
    push();

    // A red bar passing through the box
    translate(0, height / 4, 0);

    texture(this.carpet);
    box(3 * width, 100, 3000);

    pop();
    push();
    translate(0, height / 5, -100);
    rotateX(180);
    rotateY(-90);
    rotateZ(0);
    scale(25, 25, 25);
    texture(this.wood);
    model(this.desk);
    pop();

    //Creating legal pad
    push();
    translate(0, 10, -10);
    scale(25, 25, 25);
    fill(200, 203, 10);
    model(this.legalPad);
    pop();

    //Creating paper punch
    push();
    translate(width / 4, 35, -1000);
    rotateX(180);
    rotateY(0);
    rotateZ(0);
    scale(15, 15, 15);

    texture(metal);
    model(this.paperPunch);
    pop();

    //Creating pen
    push();
    translate(-width / 12, 5, 100);
    rotateX(180);
    rotateY(180);
    rotateZ(180);
    scale(5, 5, 5);
    fill(0);
    model(this.pen);
    pop();

    //Creating pencil holder
    push();
    translate(-width / 20, -5, 0);
    rotateX(180);
    rotateY(180);
    rotateZ(180);
    scale(0.25, 0.25, 0.25);
    fill(150);
    model(this.pencilHolder);
    pop();
  }
}
