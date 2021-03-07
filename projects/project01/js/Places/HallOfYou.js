class HallOfYou extends State {
  //Setting hall of you parameters
  constructor(
    doughnut,
    doughnut2,
    doughnut3,
    doughnut4,
    doughnut5,
    doughnut6,
    doughnut7,
    doughnut8,
    doughnutTexture,
    doughnutTexture2,
    doughnutTexture3,
    doughnutTexture4,
    doughnutTexture5,
    comment
  ) {
    super(
      doughnut,
      doughnut2,
      doughnut3,
      doughnut4,
      doughnut5,
      doughnut6,
      doughnut7,
      doughnut8,
      doughnutTexture,
      doughnutTexture2,
      doughnutTexture3,
      doughnutTexture4,
      doughnutTexture5,
      comment
    );

    //Creating the comment
    this.comment = comment;

    //Creating the doughnuts
    this.doughnut = doughnut;
    this.doughnut2 = doughnut2;
    this.doughnut3 = doughnut3;
    this.doughnut4 = doughnut4;
    this.doughnut5 = doughnut5;
    this.doughnut6 = doughnut6;
    this.doughnut7 = doughnut7;
    this.doughnut8 = doughnut8;

    //Creating the doughnuts texture
    this.doughnutTexture = doughnutTexture;
    this.doughnutTexture2 = doughnutTexture2;
    this.doughnutTexture3 = doughnutTexture3;
    this.doughnutTexture4 = doughnutTexture4;
    this.doughnutTexture5 = doughnutTexture5;
  }

  //Preloading images and obj files
  preload() {
    super.preload();
    this.floor.preload();
    this.doughnut.preload();
    this.doughnut2.preload();
    this.doughnut3.preload();
    this.doughnut4.preload();
    this.doughnut5.preload();
    this.doughnut6.preload();
    this.doughnut7.preload();
    this.doughnut8.preload();
    this.doughnutTexture.preload();
    this.doughnutTexture2.preload();
    this.doughnutTexture3.preload();
    this.doughnutTexture4.preload();
    this.doughnutTexture5.preload();
  }

  //Setting the environment
  draw() {
    super.draw();
    background(0);
    angleMode(DEGREES);
    lights();

    // Displaying the floor
    push();
    translate(0, height / 4, 0);
    fill(100);
    box(3 * width, 100, 3000);
    pop();

    //Displaying the doughnuts
    push();
    translate(width / 2, 40, 0);
    rotateX(180);
    rotateY(0);
    rotateZ(0);
    scale(20, 20, 20);
    texture(this.doughnutTexture);
    model(this.doughnut);
    pop();
    push();
    translate(-width / 4, 60, 0);
    rotateX(180);

    scale(10, 10, 10);
    texture(this.doughnutTexture2);
    model(this.doughnut2);
    pop();
    push();
    translate(width / 3, 50, 350);
    rotateX(-80);

    scale(5, 5, 5);
    texture(this.doughnutTexture2);
    model(this.doughnut3);
    pop();
    push();
    translate(-width / 2, 50, 400);

    scale(20, 20, 20);
    texture(this.doughnutTexture3);
    model(this.doughnut4);
    pop();
    push();
    translate(width / 2, 40, 450);
    rotateX(180);

    scale(20, 20, 20);
    texture(this.doughnutTexture3);
    model(this.doughnut5);
    pop();
    push();
    translate(-width / 5, 120, -300);
    rotateX(180);

    scale(12, 12, 12);
    texture(this.doughnutTexture4);
    model(this.doughnut6);
    pop();
    push();
    translate(-width / 2, height / 10, -100);
    rotateX(180);

    scale(25, 25, 25);
    texture(this.doughnutTexture5);
    model(this.doughnut7);
    pop();
    push();
    translate(width / 2, height / 8, 350);
    rotateX(180);

    scale(5, 5, 5);
    texture(this.doughnutTexture);
    model(this.doughnut8);
    pop();

    //Display the comment
    push();
    textSize(30);
    textAlign(CENTER, CENTER);
    translate(0, 0, 200);
    text(this.comment, 0, -height / 3);
    pop();
  }
}
