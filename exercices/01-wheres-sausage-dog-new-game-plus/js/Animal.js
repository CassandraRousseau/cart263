class Animal {
  //Creating the second cutscene of Chapter Five
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.image = image;

    this.angle = 0;
    this.vx = 0;
    this.vy = 0;
    this.speed = 4;
  }

  //Setting the second cutscene of Chapter Five
  update() {
    this.display();
  }
  //Setting flowers movements
  move() {
    this.vx = random(-this.speed, this.speed);
    this.vy = random(-this.speed, this.speed);

    this.x += this.vx;
    this.y += this.vy;

    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
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
  overlap(x, y) {
    if (
      x > this.x - this.image.width / 2 &&
      x < this.x + this.image.width / 2 &&
      y > this.y - this.image.height / 2 &&
      y < this.y + this.image.height / 2
    ) {
      return true;
    } else {
      return false;
    }
  }
}
