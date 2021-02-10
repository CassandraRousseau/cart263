class Auditorium extends State {
  constructor(video) {
    super(video);
    this.name = `Auditorium`;
    this.curtains = [];
    this.seats = [];
    this.floor = new FloorAuditorium();
    this.screen = new CinemaScreen();

    this.seats = new Seats();
    this.video = new Video(video);
    this.stage = new Stage();
    //Creating the right side rock
    for (let i = 0; i < numCurtainRight; i++) {
      this.curtainRight = new CurtainRight(curtains);

      this.curtains.push(this.curtainRight);
    }

    //Creating the left side thorn
    for (let i = 0; i < numCurtainLeft; i++) {
      this.curtainLeft = new CurtainLeft(curtains);

      this.curtains.push(this.curtainLeft);
    }

    //Creating the left side thorn
    for (let i = 0; i < numSeatsLeftFirstRow; i++) {
      this.seatLeftFirstRow = new SeatLeftFirstRow();

      this.seats.push(this.seatLeftFirstRow);
    }

    //Creating the left side thorn
    for (let i = 0; i < numSeatsLeftSecondRow; i++) {
      this.seatLeftSecondRow = new SeatLeftSecondRow();

      this.seats.push(this.seatLeftSecondRow);
    }

    //Creating the left side thorn
    for (let i = 0; i < numSeatsLeftThirdRow; i++) {
      this.seatLeftThirdRow = new SeatLeftThirdRow();

      this.seats.push(this.seatLeftThirdRow);
    }

    //Creating the left side thorn
    for (let i = 0; i < numCurtainLeft; i++) {
      this.seatRightFirstRow = new SeatRightFirstRow();

      this.seats.push(this.seatRightFirstRow);
    }

    //Creating the left side thorn
    for (let i = 0; i < numCurtainLeft; i++) {
      this.seatRightSecondRow = new SeatRightSecondRow();

      this.seats.push(this.seatRightSecondRow);
    }

    //Creating the left side thorn
    for (let i = 0; i < numCurtainLeft; i++) {
      this.seatRightThirdRow = new SeatRightThirdRow();

      this.seats.push(this.seatRightThirdRow);
    }
  }
  preload() {
    super.preload();
    this.curtainLeft.preload();
    this.curtainRight.preload();
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
    push();
    for (let i = 0; i < this.curtains.length; i++) {
      let curtainsObject = this.curtains[i];

      curtainsObject.display();
    }
    pop();

    push();
    this.screen.display();
    pop();
    // push();
    // this.video.display();
    // pop();
    push();
    this.stage.display();
    pop();

    pop();
    push();
    for (let i = 0; i < this.seats.length; i++) {
      let seatsObject = this.seats[i];

      seatsObject.display();
    }
    pop();
  }
}

//   mousePressed() {
//     super.mousePressed();
//
//     this.video.play();
//   }
// }
