class Animal {
  //Creating the second cutscene of Chapter Five
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.image = image;

    this.angle = 0;
  }

  //Setting the second cutscene of Chapter Five
  update() {
    this.display();
  }

  //Displaying the second cutscene of Chapter Five
  display() {
    push();
    imageMode(CENTER);
    translate(this.x, this.y);
    rotate(this.angle);
    image(this.image, 0, 0);
    pop();
  }
}
