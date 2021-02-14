class BasketballField extends State {
  constructor(floor, basketballRim, metal) {
    super(floor, basketballRim, metal);
    this.floor = new FloorHall(floor);
    this.basketballRim = basketballRim;
    this.metal = metal;
  }
  preload() {
    super.preload();
    this.floor.preload();
    this.basketballRim.preload();
    this.metal.preload();
  }
  draw() {
    super.draw();
    background(255);
    angleMode(DEGREES);
    push();
    this.floor.display();
    pop();
    push();
    translate(0, -18, -1000);
    rotateX(-180.65);
    rotateY(0);
    rotateZ(0);
    // scale(15, 15, 15);

    texture(this.metal);

    model(this.basketballRim);
    pop();
  }
}
// new BasketballField(floor, basketballRim, metal);
