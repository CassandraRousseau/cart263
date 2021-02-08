class Auditorium {
  constructor() {
    this.name = `Auditorium`;
    this.floor = new FloorAuditorium();
    this.screen = new CinemaScreen();
    this.curtains = new Curtains();
    this.seats = new Seats();
    this.video = new Video();
    this.stage = new Stage();
  }
  draw() {
    background(0);
    lights();
  }
}

function mousePressed() {
  video.play();
}
