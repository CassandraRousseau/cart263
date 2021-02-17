class HallOfYou extends State {
  //Setting the parameters
  constructor(
    doughnut,
    doughnut2,
    doughnut3,
    doughnut4,
    doughnut5,
    doughnut6,
    doughnut7,
    doughnut8,
    doughnutTexture
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
      doughnutTexture
    );

    this.doughnut = doughnut;
    this.doughnut2 = doughnut2;
    this.doughnut3 = doughnut3;
    this.doughnut4 = doughnut4;
    this.doughnut5 = doughnut5;
    this.doughnut6 = doughnut6;
    this.doughnut7 = doughnut7;
    this.doughnut8 = doughnut8;
    this.doughnutTexture = doughnutTexture;
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
  }

  //Setting the environment
  draw() {
    super.draw();
    background(255);
    angleMode(DEGREES);

    //Displaying the doughnuts
    push();
    translate(width / 2, 0, 0);
    rotateX(0);
    rotateY(0);
    rotateZ(0);
    scale(5, 5, 5);
    texture(this.doughnutTexture);
    model(this.doughnut);
    pop();
    push();
    translate(0, 0, 0);
    rotateX(180);

    scale(10, 10, 10);
    texture(this.doughnutTexture);
    model(this.doughnut2);
    pop();
    push();
    translate(0, 0, 0);
    rotateX(180);

    scale(10, 10, 10);
    texture(this.doughnutTexture);
    model(this.doughnut3);
    pop();
    push();
    translate(0, 0, 0);

    scale(10, 10, 10);
    texture(this.doughnutTexture);
    model(this.doughnut4);
    pop();
    push();
    translate(0, 0, 0);
    rotateX(180);

    scale(10, 10, 10);
    texture(this.doughnutTexture);
    model(this.doughnut5);
    pop();
    push();
    translate(-width / 2, height / 2, -300);
    rotateX(180);

    scale(10, 10, 10);
    texture(this.doughnutTexture);
    model(this.doughnut6);
    pop();
    push();
    translate(0, 0, 0);
    rotateX(180);

    scale(10, 10, 10);
    texture(this.doughnutTexture);
    model(this.doughnut7);
    pop();
    push();
    translate(width / 2, 0, 0);
    rotateX(180);

    scale(10, 10, 10);
    texture(this.doughnutTexture);
    model(this.doughnut8);
    pop();
  }
}
//
// function draw() {
//
//   background(0);
//   noStroke();
//
//   push();
//   translate(0, 250, 0);
//   fill(100);
//   box(windowWidth, 100, 600);
// //   pop();
// }
// new HallOfYou(
//   doughnut,
//   doughnut2,
//   doughnut3,
//   doughnut4,
//   doughnut5,
//   doughnut6,
//   doughnut7,
//   doughnut8,
//   doughnutTexture
// );
// currentState = title;
// }
