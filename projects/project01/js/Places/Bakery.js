class Bakery {
  constructor() {
    this.background = new BakeryBackground(windows);
    this.floor = new FloorBakery();
    this.counters = [];
    //Creating the right side rock
    for (let i = 0; i < numCounters; i++) {
      this.counterRight = new CounterRight();

      this.counters.push(this.counterRight);
    }
    //Creating the right side rock
    for (let i = 0; i < numCounters; i++) {
      this.counterLeft = new CounterLeft();

      this.counters.push(this.counterLeft);
    }
  }
  draw() {
    background(255);
    // Translate to the center (not really needed, but just for completeness)

    // Looks nicer
    noStroke();
    push();
    this.background.display();
    this.floor.display();
    push();
    for (let i = 0; i < this.counters.length; i++) {
      let countersObject = this.counters[i];

      countersObject.display();
    }
    pop();

    //
    // push();
    // rotateX(angle);
    // rotateY(angle);
    // rotateZ(angle);
    // translate(100, 100, 100);
    // model(cake);
    // model(pizza);
    // pop();
    pop();
  }
}
