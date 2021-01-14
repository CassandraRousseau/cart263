class Animal {
  //Creating the second cutscene of Chapter Five
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.angle = 0;
    this.image = image;
  }

  //Preloading necessary images for the second cutscene of Chapter Five
  preload() {
    this.image.preload();
  }

  //Setting the second cutscene of Chapter Five
  update() {
    this.display();
  }

  //Displaying the second cutscene of Chapter Five
  display() {
    push();
    imageMode(CENTER);
    translate();
    rotate(this.angle);
    image(this.image, this.x, this.y, this.w, this.h);
    pop();
  }
}
