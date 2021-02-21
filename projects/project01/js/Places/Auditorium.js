class Auditorium extends State {
  //Setting auditorium parameters
  constructor(video, curtains) {
    super(video, curtains);
    this.name = `auditorium`;
    this.subheader = `Press your Mouse to Start`;
    this.curtains = [];
    this.seats = [];
    this.floor = new FloorAuditorium();
    this.screen = new CinemaScreen();

    // this.seats = new Seats();
    this.video = new Video(video);
    this.stage = new Stage();

    for (let i = 0; i < numCurtains; i++) {
      this.curtainRight = new CurtainRight(curtains);

      this.curtains.push(this.curtainRight);
    }

    for (let i = 0; i < numCurtains; i++) {
      this.curtainLeft = new CurtainLeft(curtains);

      this.curtains.push(this.curtainLeft);
    }

    for (let i = 0; i < numSeats; i++) {
      this.seatLeftFirstRow = new SeatLeftFirstRow();

      this.seats.push(this.seatLeftFirstRow);
    }

    for (let i = 0; i < numSeats; i++) {
      this.seatLeftSecondRow = new SeatLeftSecondRow();

      this.seats.push(this.seatLeftSecondRow);
    }

    for (let i = 0; i < numSeats; i++) {
      this.seatLeftThirdRow = new SeatLeftThirdRow();

      this.seats.push(this.seatLeftThirdRow);
    }

    for (let i = 0; i < numSeats; i++) {
      this.seatRightFirstRow = new SeatRightFirstRow();

      this.seats.push(this.seatRightFirstRow);
    }

    for (let i = 0; i < numSeats; i++) {
      this.seatRightSecondRow = new SeatRightSecondRow();

      this.seats.push(this.seatRightSecondRow);
    }

    for (let i = 0; i < numSeats; i++) {
      this.seatRightThirdRow = new SeatRightThirdRow();

      this.seats.push(this.seatRightThirdRow);
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
    push();

    //Displaying the floor
    push();
    this.floor.display();
    pop();

    //Displaying the curtains
    push();
    for (let i = 0; i < this.curtains.length; i++) {
      let curtainsObject = this.curtains[i];

      curtainsObject.display();
    }
    pop();

    //Displaying the screen
    push();
    this.screen.display();
    pop();

    //Displaying the video
    push();
    this.video.display();
    pop();

    //Displaying the stage
    push();
    this.stage.display();
    pop();

    //Displaying the seats
    push();
    for (let i = 0; i < this.seats.length; i++) {
      let seatsObject = this.seats[i];

      seatsObject.display();
    }
    pop();
    textSize(50);
    text(this.subheader, 0, -height / 50);
    pop();
    pop();
  }
  //Video starts when mouse pressed
  mousePressed() {
    super.mousePressed();

    this.video.texture.play();
  }
}
