class Animal {
  //Creating animals parameters
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.image = image;

    this.vx = 0;
    this.vy = 0;
    this.speed = 4;
  }

  //Setting the animals in the level
  update() {
    this.move();
    this.display();
  }

  //Setting animals random movements
  move() {
    this.vx = random(-this.speed, this.speed);
    this.vy = random(-this.speed, this.speed);

    this.x += this.vx;
    this.y += this.vy;

    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  //Displaying the animals in the level
  display() {
    push();
    imageMode(CENTER);
    translate(this.x, this.y);
    image(this.image, 0, 0, this.image.width, this.image.height);
    pop();
  }

  //Setting how to recognize that the sausage dog was found
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
