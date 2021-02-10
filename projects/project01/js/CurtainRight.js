class CurtainRight extends Curtains {
  constructor(curtains) {
    super(curtains);
    this.translateX = width / 2;
    this.texture = curtains;
  }
  display() {
    super.display();
    push();

    // Our central cube is white
    translate(this.translateX, this.translateY, this.translateZ);

    texture(this.texture);
    plane(this.width, this.height);
    pop();
  }
}
