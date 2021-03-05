class Auditorium extends State {
  //Setting auditorium parameters
  constructor(video, curtainsData, curtains, seatsData) {
    super(video, curtainsData, curtains, seatsData);
    this.name = `auditorium`;
    this.subheader = `Press your Mouse to watch the video. Once it's done, say "Go to Hall of Everything"`;
    this.curtains = [];
    this.seats = [];
    this.floor = new FloorAuditorium();
    this.screen = new CinemaScreen();

    this.video = new Video(video);
    this.stage = new Stage();

    for (let i = 0; i < curtainsData.curtains.length; i++) {
      let data = curtainsData.curtains[i];
      this.curtain = new Curtains(data.x, curtains);
      this.curtains.push(this.curtain);
    }

    for (let i = 0; i < seatsData.seats.length; i++) {
      let seatData = seatsData.seats[i];
      this.seat = new Seats(seatData.x, seatData.z);
      this.seats.push(this.seat);
    }
  }
  //Preloading the video and images
  preload() {
    super.preload();
    this.curtainLeft.preload();
    this.curtainRight.preload();
    this.video.preload();
  }

  //Displaying the environment
  draw() {
    super.draw();
    background(0);
    lights();

    // Displaying the floor
    this.floor.display();

    //Displaying the curtains
    for (let i = 0; i < this.curtains.length; i++) {
      this.curtains[i].display();
    }

    //Displaying the screen

    this.screen.display();

    //Displaying the video

    this.video.display();

    //Displaying the stage

    this.stage.display();

    //Displaying the seats
    for (let i = 0; i < this.seats.length; i++) {
      this.seats[i].display();
    }

    //Displaying the instructions
    push();
    textSize(50);
    text(this.subheader, -width / 2, height / 25);
    pop();
  }
  //Video starts when mouse pressed
  mousePressed() {
    super.mousePressed();
    this.video.texture.play();
  }
}
