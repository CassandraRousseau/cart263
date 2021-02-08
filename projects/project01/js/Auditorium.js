class Auditorium extends State {
  constructor() {
    super();
    this.name = `Auditorium`;
    this.floor = new FloorAuditorium();
    this.screen = new CinemaScreen();
    this.curtains = new Curtains(width, curtains);
    this.seats = new Seats();
    this.video = new Video(video);
    this.stage = new Stage();
  }
  preload() {
    super.preload();
    this.curtains.preload();
    this.video.preload();
  }
  draw() {
    super.draw();
    background(0);
    lights();
    push();
    push();
    this.floor.display();
    pop();
    // push();
    //
    // this.curtains.display(-width);
    // pop();
    // push();
    // this.curtains.display(width);
    // pop();
    push();
    this.screen.display();
    pop();
    // push();
    // this.video.display();
    // pop();
    // push();
    // this.stage.display();
    // pop();
    // push();
    // this.seats.display(-width / 4, 100);
    // pop();
    // push();
    // this.seats.display(width / 4, 100);
    // pop();
    // push();
    // this.seats.display(-width / 4, 200);
    // pop();
    // push();
    // this.seats.display(width / 4, 200);
    // pop();
    // push();
    // this.seats.display(-width / 4, 300);
    // pop();
    // push();
    // this.seats.display(width / 4, 300);
    // pop();
    pop();
  }
  //
  // mousePressed() {
  //   super.mousePressed();
  //   console.log(mousePressed);
  //   console.log(video);
  //   this.video.play();
  // }
}
